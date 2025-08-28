// src/components/Curriculum.jsx
import React from "react";

export default function Curriculum() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-100">
      {/* Enhanced Curriculum Section */}
      <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-gray-200">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            📚 Kurikulum Pembelajaran
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kurikulum komprehensif yang menggabungkan pendidikan akademik,
            pengembangan karakter, dan nilai-nilai islami
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Academic */}
          <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              🧮
            </div>
            <h4 className="font-bold text-2xl text-blue-700 mb-6">Akademik</h4>
            <ul className="text-gray-700 space-y-3 text-left">
              {[
                "Matematika dasar & logika",
                "Bahasa Indonesia & literasi",
                "Bahasa Inggris & conversation",
                "Sains sederhana & eksperimen",
                "Pengenalan teknologi",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Islamic Education */}
          <div className="group text-center p-8 bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              📿
            </div>
            <h4 className="font-bold text-2xl text-emerald-700 mb-6">
              Pendidikan Islam
            </h4>
            <ul className="text-gray-700 space-y-3 text-left">
              {[
                "Tahfidz Al-Quran & Hadits",
                "Bahasa Arab & kaligrafi",
                "Fiqih ibadah & akhlak",
                "Sirah Nabawiyah",
                "Praktik ibadah harian",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Character Development */}
          <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h4 className="font-bold text-2xl text-purple-700 mb-6">
              Pengembangan Diri
            </h4>
            <ul className="text-gray-700 space-y-3 text-left">
              {[
                "Seni & kerajinan tangan",
                "Olahraga & kesehatan",
                "Musik & gerak lagu",
                "Keterampilan sosial",
                "Life skills & kemandirian",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Daily Schedule Preview */}
        <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-gray-200">
          <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ⏰ Jadwal Harian Siswa
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Reguler */}
            <div>
              <h5 className="font-bold text-emerald-600 mb-4 text-lg">
                Program Reguler
              </h5>
              <div className="space-y-3 text-sm">
                {[
                  ["07.30 - 08.00", "Morning Circle & Doa", "emerald"],
                  ["08.00 - 09.00", "Tahfidz & Pendidikan Islam", "gray"],
                  ["09.00 - 09.30", "Snack Time & Istirahat", "emerald"],
                  ["09.30 - 10.30", "Pembelajaran Tematik", "gray"],
                  ["10.30 - 11.30", "Aktivitas Seni & Permainan", "emerald"],
                ].map(([time, desc, color], i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-2 bg-${color}-50 rounded-lg`}
                  >
                    <span>{time}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Full Day */}
            <div>
              <h5 className="font-bold text-blue-600 mb-4 text-lg">
                Program Full Day
              </h5>
              <div className="space-y-3 text-sm">
                {[
                  ["07.30 - 11.30", "Kegiatan Program Reguler", "blue"],
                  ["11.30 - 12.30", "Makan Siang & Dzuhur", "gray"],
                  ["12.30 - 13.30", "Istirahat & Quiet Time", "blue"],
                  ["13.30 - 14.30", "Ekstrakurikuler", "gray"],
                  ["14.30 - 15.30", "Review & Closing", "blue"],
                ].map(([time, desc, color], i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center p-2 bg-${color}-50 rounded-lg`}
                  >
                    <span>{time}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
