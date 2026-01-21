import { RefreshCw } from "lucide-react";

const CardHeader = ({ studiedToday, pickRandomFundamental, currentTopic }) => {
  return (
    <div>
      <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/5">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Active Session
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {studiedToday.length > 0
              ? `${studiedToday.length} topics crushed today`
              : "Ready to start?"}
          </p>
        </div>
        <button
          onClick={pickRandomFundamental}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-indigo-300 px-4 py-2 rounded-xl transition-all border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/10 active:scale-95"
        >
          <RefreshCw
            size={18}
            className={!currentTopic ? "animate-spin" : ""}
          />
          <span className="hidden sm:inline">Reroll Topic</span>
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
