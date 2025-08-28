// src/components/ProgramCard.jsx
import React from "react";
import { Clock, CheckCircle } from "lucide-react";

const ProgramCard = ({ program, setCurrentSection }) => {
  return (
    <div
      className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-102 border-2 ${
        program.color === "emerald"
          ? "border-emerald-200 hover:border-emerald-300"
          : "border-blue-200 hover:border-blue-300"
      }`}
    >
      {/* Popular Badge */}
      {program.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            ⭐ PALING POPULER
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
              program.color === "emerald"
                ? "bg-gradient-to-r from-emerald-500 to-green-500"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
            }`}
          >
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">
              {program.title}
            </h3>
            <p
              className={`font-bold text-lg ${
                program.color === "emerald" ? "text-emerald-600" : "text-blue-600"
              }`}
            >
              {program.duration}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div
            className={`text-3xl font-black ${
              program.color === "emerald" ? "text-emerald-600" : "text-blue-600"
            }`}
          >
            {program.price}
          </div>
          <div className="text-sm text-gray-500 line-through">Rp 400.000/bln</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-8 leading-relaxed text-lg">
        {program.description}
      </p>

      {/* Features */}
      <div className="space-y-4 mb-8">
        <h4 className="font-bold text-xl text-gray-800 mb-6">✨ Fitur Program:</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {program.features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center p-3 rounded-xl transition-all hover:scale-105 ${
                program.color === "emerald"
                  ? "bg-emerald-50 hover:bg-emerald-100"
                  : "bg-blue-50 hover:bg-blue-100"
              }`}
            >
              <CheckCircle
                className={`w-5 h-5 mr-3 flex-shrink-0 ${
                  program.color === "emerald" ? "text-emerald-600" : "text-blue-600"
                }`}
              />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => setCurrentSection("registration")}
        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
          program.color === "emerald"
            ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600"
            : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
        }`}
      >
        Pilih Program Ini
      </button>
    </div>
  );
};

export default ProgramCard;
