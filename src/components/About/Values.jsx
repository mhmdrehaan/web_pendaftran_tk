// src/components/Values.jsx
import React from "react";

const valuesData = [
  {
    icon: "🕌",
    title: "Religius",
    color: "text-emerald-600",
    desc: "Menumbuhkan kecintaan mendalam terhadap Allah SWT, Rasul-Nya, dan ajaran Islam",
  },
  {
    icon: "🧠",
    title: "Cerdas",
    color: "text-blue-600",
    desc: "Mengembangkan kecerdasan intelektual, emosional, dan spiritual secara seimbang",
  },
  {
    icon: "🤝",
    title: "Santun",
    color: "text-purple-600",
    desc: "Membentuk akhlakul karimah, sopan santun, dan budi pekerti yang luhur",
  },
  {
    icon: "💪",
    title: "Mandiri",
    color: "text-orange-600",
    desc: "Membangun kemandirian, tanggung jawab, dan kepercayaan diri anak",
  },
];

const Values = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl p-12 border border-gray-200">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
          ⭐ Nilai-Nilai Sekolah
        </h3>
        <p className="text-xl text-gray-600">
          Fondasi karakter yang kami bangun pada setiap anak didik
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{value.icon}</div>
            <h4 className={`font-bold text-xl mb-4 ${value.color}`}>
              {value.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
