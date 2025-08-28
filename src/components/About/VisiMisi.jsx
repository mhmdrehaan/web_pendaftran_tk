// src/components/VisionMission.jsx
import { Target, Sparkles, ChevronRight } from "lucide-react";

const VisiMisi = ({ currentSection }) => {
  if (currentSection !== "about") return null;

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Visi */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl shadow-2xl p-10 border border-emerald-200">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mr-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-emerald-700">Visi Kami</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          Menjadi lembaga pendidikan Islam terdepan yang mencetak generasi
          Qur'ani, berkarakter kuat, cerdas, kreatif, dan siap menghadapi
          tantangan global dengan tetap berpegang teguh pada nilai-nilai
          keislaman.
        </p>
      </div>

      {/* Misi */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl shadow-2xl p-10 border border-blue-200">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-blue-700">Misi Kami</h3>
        </div>
        <ul className="text-gray-700 space-y-4 text-lg">
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span>
              Menyelenggarakan pendidikan berkualitas dengan kurikulum
              terintegrasi Islam dan umum
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span>
              Membentuk karakter islami dan akhlakul karimah pada setiap peserta
              didik
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span>
              Mengembangkan potensi akademik, kreativitas, dan keterampilan hidup
              anak
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <span>
              Menciptakan lingkungan belajar yang kondusif, aman, dan islami
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisiMisi;
