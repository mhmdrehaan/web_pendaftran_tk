// src/components/Programs.jsx
import React from "react";          


const Programs= [
  {
    title: "Playgroup",
    desc: "Program untuk anak usia dini agar terbiasa dengan lingkungan belajar sambil bermain.",
    color: "emerald",
    icon: "🧸",
  },
  {
    title: "TK A",
    desc: "Membantu anak mengembangkan keterampilan dasar, sosial, dan motorik.",
    color: "blue",
    icon: "📘",
  },
  {
    title: "TK B",
    desc: "Persiapan matang sebelum memasuki jenjang sekolah dasar dengan pendekatan islami.",
    color: "emerald",
    icon: "✏️",
  },
  {
    title: "Ekstrakurikuler",
    desc: "Beragam kegiatan tambahan seperti seni, olahraga, dan tahfidz Al-Qur’an.",
    color: "blue",
    icon: "⚽",
  },
];

const ProgramsSection = () => { 
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            🎓 Program Pendidikan
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Pilihan program pembelajaran yang disesuaikan dengan kebutuhan perkembangan anak dan keluarga,
            <span className="font-bold text-emerald-600"> dengan pendekatan holistik dan islami</span>
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {Programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-102 border-2 ${
                program.color === "emerald"
                  ? "border-emerald-200 hover:border-emerald-300"
                  : "border-blue-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`text-5xl flex-shrink-0 ${
                    program.color === "emerald" ? "text-emerald-500" : "text-blue-500"
                  }`}
                >
                  {program.icon}
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      program.color === "emerald" ? "text-emerald-700" : "text-blue-700"
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
