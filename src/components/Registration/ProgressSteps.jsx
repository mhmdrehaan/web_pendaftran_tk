import { ChevronRight } from "lucide-react";

export default function ProgressSteps({ currentStep = 1 }) {
  const steps = [
    { id: 1, title: "Isi Form", desc: "Data pendaftaran lengkap" },
    { id: 2, title: "Verifikasi", desc: "Tim sekolah meninjau" },
    { id: 3, title: "Konfirmasi", desc: "Diterima & orientasi" },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg 
              ${currentStep >= step.id 
                ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white" 
                : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.id}
            </div>
            <div className="ml-4">
              <div
                className={`font-bold ${
                  currentStep >= step.id ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {step.title}
              </div>
              <div
                className={`text-sm ${
                  currentStep >= step.id ? "text-gray-600" : "text-gray-500"
                }`}
              >
                {step.desc}
              </div>
            </div>

            {/* Arrow kecuali step terakhir */}
            {index < steps.length - 1 && (
              <ChevronRight className="w-6 h-6 text-gray-400 mx-4" />
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full shadow-sm transition-all duration-500"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
