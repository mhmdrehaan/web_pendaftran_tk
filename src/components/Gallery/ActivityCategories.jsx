// src/components/ActivityCategories.jsx
import React from "react";

const categories = [
  {
    icon: "📚",
    title: "Kegiatan Belajar",
    desc: "Suasana pembelajaran yang menyenangkan dan interaktif",
    color: "emerald",
    gradient: "from-emerald-50 to-green-100",
    border: "border-emerald-200",
    text: "text-emerald-700",
  },
  {
    icon: "🎨",
    title: "Seni & Kreativitas",
    desc: "Mengeksplorasi bakat seni dan kreativitas anak",
    color: "blue",
    gradient: "from-blue-50 to-cyan-100",
    border: "border-blue-200",
    text: "text-blue-700",
  },
  {
    icon: "🕌",
    title: "Kegiatan Islami",
    desc: "Pembinaan akhlak dan praktik ibadah sehari-hari",
    color: "purple",
    gradient: "from-purple-50 to-violet-100",
    border: "border-purple-200",
    text: "text-purple-700",
  },
  {
    icon: "🎉",
    title: "Event & Perayaan",
    desc: "Momen spesial dan perayaan bersama",
    color: "orange",
    gradient: "from-orange-50 to-red-100",
    border: "border-orange-200",
    text: "text-orange-700",
  },
];

export default function ActivityCategories() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            🏫 Kategori Kegiatan
          </h2>
          <p className="text-lg text-gray-600">
            Beragam aktivitas yang dirancang untuk mengembangkan potensi anak
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className={`text-center p-6 bg-gradient-to-br ${item.gradient} rounded-2xl border-2 ${item.border} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={`font-bold ${item.text} mb-2`}>{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
