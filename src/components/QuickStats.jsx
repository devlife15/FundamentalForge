import { Calendar, Target } from "lucide-react";

const QuickStats = ({ daysRemaining, targetPerDay }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all hover:bg-white/10">
          <div className="flex items-center gap-2 mb-2 text-indigo-300">
            <Calendar size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Remaining
            </span>
          </div>
          <p className="text-3xl font-bold text-white">{daysRemaining}</p>
          <p className="text-xs text-slate-400">Days left</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all hover:bg-white/10">
          <div className="flex items-center gap-2 mb-2 text-green-400">
            <Target size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Daily Goal
            </span>
          </div>
          <p className="text-3xl font-bold text-white">{targetPerDay}</p>
          <p className="text-xs text-slate-400">Topics / day</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
