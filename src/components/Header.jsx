import { Award } from "lucide-react";

const Header = ({ milestone }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 tracking-tight mb-2">
          Fundamental Forge
        </h1>
        <p className="text-slate-400 text-lg">
          Random daily revision for interview mastery
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <Award className={milestone.color} size={20} />
        <span className="font-medium text-slate-200">{milestone.text}</span>
      </div>
    </div>
  );
};

export default Header;
