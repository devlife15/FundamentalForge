import React from "react";

const DomainList = ({ fundamentals, studyHistory }) => {
  return (
    <div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-h-75 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 sticky top-0 bg-[#161b2e] py-2 z-10">
          Domain Mastery
        </h3>
        <div className="space-y-3">
          {Object.entries(fundamentals).map(([bucket, topics]) => {
            const studied = studyHistory.filter(
              (t) => t.bucket === bucket,
            ).length;
            const total = topics.length;
            const percent =
              total > 0 ? ((studied / total) * 100).toFixed(0) : 0;

            return (
              <div key={bucket} className="group">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-slate-300 group-hover:text-white transition-colors truncate max-w-[70%]">
                    {bucket}
                  </span>
                  <span className="text-slate-500">
                    {studied}/{total}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${Number(percent) === 100 ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-slate-600 group-hover:bg-indigo-500"}`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DomainList;
