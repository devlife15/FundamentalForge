import React from "react";

const StudyTemplate = () => {
  return (
    <div>
      <div className="bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-indigo-500 rounded-full"></span>
          30-Min Protocol
        </h3>
        <div className="space-y-4 relative">
          <div className="absolute left-2.75 top-2 bottom-2 w-0.5 bg-slate-700/50"></div>

          {[
            {
              time: "0-10",
              label: "Read & Absorb",
              desc: "Understand the core problem.",
              color: "bg-blue-500",
            },
            {
              time: "10-20",
              label: "Rubber Duck",
              desc: "Explain it out loud. Close tabs.",
              color: "bg-green-500",
            },
            {
              time: "20-28",
              label: "Code It",
              desc: "Write example code or draw.",
              color: "bg-orange-500",
            },
            {
              time: "28-30",
              label: "Connect",
              desc: "Link to a previous topic.",
              color: "bg-purple-500",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative">
              <div
                className={`w-6 h-6 rounded-full border-2 border-slate-800 shrink-0 z-10 ${item.color}`}
              ></div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-slate-400">
                    {item.time}m
                  </span>
                  <span className="font-semibold text-slate-200 text-sm">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyTemplate;
