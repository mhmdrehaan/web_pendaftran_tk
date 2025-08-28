import { Sparkles } from "lucide-react";

export default function Tips({ 
  title = "💡 Tips Pengisian Form:", 
  tips = [] 
}) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
          <Sparkles className="text-white w-4 h-4" />
        </div>
        <div>
          <div className="font-bold text-blue-800 mb-3">{title}</div>
          <ul className="text-blue-700 space-y-2 text-sm">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
