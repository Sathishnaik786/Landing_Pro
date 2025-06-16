
import { X, FileText, Check } from "lucide-react";

const templates = [
  {
    name: "Bold Hero",
    desc: "High-impact hero section, big headline, call to action.",
    preview: (
      <div className="w-16 h-12 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-10 h-2 bg-white rounded-full mt-2"></div>
        <div className="w-7 h-2 bg-white/80 rounded-full mt-1"></div>
        <div className="absolute bottom-1 right-1 bg-white/50 w-5 h-5 rounded-full blur"></div>
      </div>
    ),
  },
  {
    name: "Minimalist",
    desc: "Clean layout, focus on main message and email signup.",
    preview: (
      <div className="w-16 h-12 bg-slate-100 rounded-md flex flex-col items-center justify-center border">
        <div className="w-8 h-2 bg-slate-400 rounded-full"></div>
        <div className="w-10 h-2 bg-slate-200 rounded-full mt-1"></div>
        <div className="mt-1 w-5 h-2 bg-emerald-400 rounded"></div>
      </div>
    ),
  },
  {
    name: "Product Showcase",
    desc: "Feature grid, product gallery, lead form.",
    preview: (
      <div className="w-16 h-12 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 rounded-md p-1 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded bg-white/80"></div>
          <div className="w-3 h-3 rounded bg-white/60"></div>
          <div className="w-3 h-3 rounded bg-white/40"></div>
        </div>
        <div className="w-full h-2 bg-violet-400 rounded"></div>
        <div className="w-8 h-2 bg-pink-400 rounded mx-auto"></div>
      </div>
    ),
  },
  {
    name: "Split Image",
    desc: "Two-column: attention-grabbing image & headline.",
    preview: (
      <div className="w-16 h-12 bg-gradient-to-l from-fuchsia-400 to-orange-200 rounded-md flex">
        <div className="w-1/2 h-full bg-white/80 rounded-l-md"></div>
        <div className="flex flex-col justify-center items-start pl-1 w-1/2">
          <div className="w-7 h-1.5 bg-white/60 rounded mb-1"></div>
          <div className="w-6 h-1 bg-white/30 rounded"></div>
        </div>
      </div>
    ),
  },
  {
    name: "Elegant Dark",
    desc: "Sophisticated dark theme, bold headline, sleek form.",
    preview: (
      <div className="w-16 h-12 bg-neutral-900 rounded-md flex flex-col items-center justify-center border border-neutral-800">
        <div className="w-10 h-2 bg-neutral-700 rounded-full"></div>
        <div className="w-8 h-2 bg-blue-500/80 rounded-full mt-2"></div>
        <div className="w-5 h-1.5 bg-emerald-400 rounded mt-1"></div>
      </div>
    ),
  },
  {
    name: "Startup Gradient",
    desc: "Ombre gradient background, modern cards, minimal nav.",
    preview: (
      <div className="w-16 h-12 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-md flex flex-col justify-end items-center">
        <div className="w-12 h-2 bg-white/60 rounded mb-2"></div>
        <div className="w-6 h-2 bg-white/30 rounded"></div>
      </div>
    ),
  },
];

const TemplatePicker = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-red-500"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <h3 className="text-xl font-bold mb-6">Pick a Template</h3>
        <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-blue-400 transition group cursor-pointer bg-gray-50 hover:bg-blue-50"
            >
              <div>{tpl.preview}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{tpl.name}</span>
                  {tpl.name === "Bold Hero" && (
                    <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-muted-foreground text-sm">
                  {tpl.desc}
                </div>
              </div>
              <div className="ml-auto text-emerald-500 group-hover:text-emerald-700 transition">
                <Check />
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold text-lg transition"
          onClick={onClose}
        >
          Select Template
        </button>
      </div>
    </div>
  );
};
export default TemplatePicker;

