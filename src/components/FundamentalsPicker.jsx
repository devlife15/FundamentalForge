import { useState } from "react";
import {
  RefreshCw,
  BookOpen,
  Target,
  Lightbulb,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Core_JAVA_OOP } from "../topics/javaandoops";
import { CORE_JAVASCRIPT } from "../topics/javascript";
import { NETWORKING } from "../topics/networking";
import { APIs } from "../topics/api";
import { MODERN_WEB } from "../topics/modernWeb";
import { REACT } from "../topics/react";
import { NODE_AND_EXPRESS } from "../topics/nodeAndExpress";
import { DBMS } from "../topics/dbms";
import { MONGODB_MONGOOSE } from "../topics/mongodb_Mongoose";
import { DSA } from "../topics/dsa";
import { SYSTEM_DESIGN } from "../topics/systemDesign";
import { BROWSER } from "../topics/browser";
import { BASIC_CLOUD_CONCEPTS } from "../topics/basicCloud";
import { BASIC_DOCKER_CONCEPTS } from "../topics/docker";
import { LINUX_CONCEPTS } from "../topics/linux";
import StudyTemplate from "./StudyTemplate";
import DomainList from "./DomainList";
import QuickStats from "./QuickStats";
import OverallProgress from "./OverallProgress";
import Header from "./Header";
import CardHeader from "./CardHeader";

const fundamentals = {
  Core_JAVA_OOP,
  CORE_JAVASCRIPT,
  NETWORKING,
  APIs,
  MODERN_WEB,
  REACT,
  NODE_AND_EXPRESS,
  DBMS,
  MONGODB_MONGOOSE,
  DSA,
  SYSTEM_DESIGN,
  BROWSER,
  BASIC_CLOUD_CONCEPTS,
  BASIC_DOCKER_CONCEPTS,
  LINUX_CONCEPTS,
};

const FundamentalsPicker = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [studiedToday, setStudiedToday] = useState([]);
  const [totalStudied, setTotalStudied] = useState(0);
  const [studyHistory, setStudyHistory] = useState([]);
  const [startDate] = useState(new Date());
  const [recentTopics, setRecentTopics] = useState([]);

  const totalFundamentals = Object.values(fundamentals).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );
  const daysElapsed =
    Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const daysRemaining = Math.max(0, 150 - daysElapsed);
  const targetPerDay =
    daysRemaining > 0
      ? Math.ceil((totalFundamentals - totalStudied) / daysRemaining)
      : 0;
  const progressPercent = Math.min(
    100,
    (totalStudied / totalFundamentals) * 100,
  );

  const getRandomTopic = () => {
    const availableBuckets = Object.keys(fundamentals);
    let attempts = 0;
    let selectedTopic = null;

    while (!selectedTopic && attempts < 50) {
      const randomBucket =
        availableBuckets[Math.floor(Math.random() * availableBuckets.length)];
      const topicsInBucket = fundamentals[randomBucket];
      const randomTopic =
        topicsInBucket[Math.floor(Math.random() * topicsInBucket.length)];

      const topicKey = `${randomBucket}::${randomTopic.topic}`;

      if (!recentTopics.includes(topicKey)) {
        selectedTopic = {
          ...randomTopic,
          bucket: randomBucket,
          key: topicKey,
        };
      }
      attempts++;
    }

    if (!selectedTopic) {
      const randomBucket =
        availableBuckets[Math.floor(Math.random() * availableBuckets.length)];
      const topicsInBucket = fundamentals[randomBucket];
      const randomTopic =
        topicsInBucket[Math.floor(Math.random() * topicsInBucket.length)];
      selectedTopic = {
        ...randomTopic,
        bucket: randomBucket,
        key: `${randomBucket}::${randomTopic.topic}`,
      };
    }

    return selectedTopic;
  };

  const pickRandomFundamental = () => {
    const topic = getRandomTopic();
    setCurrentTopic(topic);
  };

  const markAsStudied = () => {
    if (!currentTopic) return;

    const today = new Date().toDateString();
    const newStudiedToday = [...studiedToday];

    if (!newStudiedToday.some((t) => t.key === currentTopic.key)) {
      newStudiedToday.push({
        ...currentTopic,
        date: today,
      });
      setStudiedToday(newStudiedToday);
      setTotalStudied((prev) => prev + 1);
      setStudyHistory((prev) => [...prev, { ...currentTopic, date: today }]);

      const newRecent = [currentTopic.key, ...recentTopics].slice(0, 15);
      setRecentTopics(newRecent);
    }

    pickRandomFundamental();
  };

  const getMilestone = () => {
    if (totalStudied >= 150)
      return { text: "Complete Pass 🎓", color: "text-purple-400" };
    if (totalStudied >= 120)
      return { text: "Almost There! 🚀", color: "text-blue-400" };
    if (totalStudied >= 90)
      return { text: "Strong Progress 💪", color: "text-green-400" };
    if (totalStudied >= 60)
      return { text: "Building Momentum 📈", color: "text-yellow-400" };
    if (totalStudied >= 30)
      return { text: "Getting Started 🌱", color: "text-orange-400" };
    return { text: "Just Beginning 👋", color: "text-indigo-300" };
  };

  const milestone = getMilestone();

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Gradient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-8">
        {/* Header */}
        <Header milestone={milestone} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Stats & Progress */}
          <div className="lg:col-span-4 space-y-6">
            <QuickStats
              daysRemaining={daysRemaining}
              targetPerDay={targetPerDay}
            />

            <OverallProgress
              totalStudied={totalStudied}
              totalFundamentals={totalFundamentals}
              progressPercent={progressPercent}
            />

            <StudyTemplate />

            <DomainList
              fundamentals={fundamentals}
              studyHistory={studyHistory}
            />
          </div>

          {/* Right Column: Active Study Area */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-1 shadow-2xl h-full flex flex-col">
              <CardHeader
                studiedToday={studiedToday}
                pickRandomFundamental={pickRandomFundamental}
                currentTopic={currentTopic}
              />

              {/* Card Body */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                {currentTopic ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Breadcrumb */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
                      {currentTopic.bucket}
                    </div>

                    {/* Topic Title */}
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                      {currentTopic.topic}
                    </h3>

                    <div className="space-y-6">
                      {/* Problem Statement */}
                      <div className="bg-linear-to-r from-amber-900/20 to-transparent border-l-4 border-amber-500/50 p-5 rounded-r-xl">
                        <div className="flex items-start gap-3">
                          <Lightbulb
                            className="text-amber-400 shrink-0 mt-1"
                            size={24}
                          />
                          <div>
                            <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">
                              The Problem
                            </p>
                            <p className="text-lg text-amber-100/90 font-light italic leading-relaxed">
                              "{currentTopic.problem}"
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Concepts */}
                      <div className="bg-slate-800/30 border border-white/5 rounded-xl p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <BookOpen
                            className="text-blue-400 shrink-0"
                            size={20}
                          />
                          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">
                            Key Concepts
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentTopic.concepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="bg-slate-700/50 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm border border-white/5 transition-colors cursor-default"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <button
                        onClick={markAsStudied}
                        className="flex-1 group relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-500 text-white px-6 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all active:scale-[0.98]"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative flex items-center justify-center gap-2">
                          <CheckCircle size={20} />
                          <span>Mastered & Next</span>
                          <ChevronRight
                            size={16}
                            className="opacity-50 group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </button>

                      <button
                        onClick={pickRandomFundamental}
                        className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-4 rounded-xl font-medium transition-colors border border-white/5 hover:border-white/10"
                      >
                        Skip for Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
                      <Target className="text-indigo-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ready to Grind?
                    </h3>
                    <p className="text-slate-400 max-w-md mx-auto mb-8">
                      Click the button below to fetch a random topic from your
                      syllabus. Keep your streak alive!
                    </p>
                    <button
                      onClick={pickRandomFundamental}
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25"
                    >
                      <RefreshCw size={20} />
                      Start Session
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalsPicker;
