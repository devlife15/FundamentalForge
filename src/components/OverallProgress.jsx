import { TrendingUp } from "lucide-react";
import React from "react";

const OverallProgress = ({
  totalStudied,
  totalFundamentals,
  progressPercent,
}) => {
  return (
    <div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <TrendingUp size={80} />
        </div>
        <h3 className="text-slate-200 font-semibold mb-1">Total Progress</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-white">{totalStudied}</span>
          <span className="text-slate-400">/ {totalFundamentals}</span>
        </div>

        <div className="w-full bg-slate-800/50 rounded-full h-3 mb-2 overflow-hidden">
          <div
            className="bg-linear-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-indigo-300 font-mono">
          {progressPercent.toFixed(1)}% Complete
        </p>
      </div>
    </div>
  );
};

export default OverallProgress;
