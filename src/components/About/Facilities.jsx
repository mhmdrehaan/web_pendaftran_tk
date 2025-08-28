// src/components/Facilities.jsx
import React from "react";

const Facilities = ({ currentSection, facilities }) => {
  if (currentSection !== "about") return null;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🏫 Fasilitas Sekolah
        </h3>
        <p className="text-xl text-gray-600">
          Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang
          optimal
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => {
          const IconComponent = facility.icon;
          return (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                facility.color === "emerald"
                  ? "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50"
                  : facility.color === "blue"
                  ? "hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50"
                  : facility.color === "purple"
                  ? "hover:bg-gradient-to-br hover:from-purple-50 hover:to-violet-50"
                  : facility.color === "amber"
                  ? "hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50"
                  : facility.color === "pink"
                  ? "hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50"
                  : "hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg ${
                  facility.color === "emerald"
                    ? "bg-gradient-to-r from-emerald-500 to-green-500"
                    : facility.color === "blue"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : facility.color === "purple"
                    ? "bg-gradient-to-r from-purple-500 to-violet-500"
                    : facility.color === "amber"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                    : facility.color === "pink"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500"
                    : "bg-gradient-to-r from-green-500 to-emerald-500"
                }`}
              >
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-4">
                {facility.name}
              </h4>
              <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
