import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Juara 1 Lomba Tahfidz",
    desc: "Prestasi tingkat nasional bidang hafalan Al-Qur’an.",
    color: "yellow",
    border: "border-yellow-400",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: Medal,
    title: "Sekolah Terakreditasi A",
    desc: "Pengakuan resmi atas kualitas pendidikan.",
    color: "green",
    border: "border-green-400",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: Star,
    title: "Juara Olimpiade Anak",
    desc: "Prestasi akademik dan kreativitas siswa.",
    color: "blue",
    border: "border-blue-400",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Award,
    title: "Penghargaan Inovasi Belajar",
    desc: "Metode pembelajaran kreatif & modern.",
    color: "purple",
    border: "border-purple-400",
    gradient: "from-purple-400 to-violet-400",
  },
];

export default function AchievementsSection() {
  return (
    <section className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
          🏆 Prestasi & Penghargaan
        </h2>
        <p className="text-xl text-gray-600">
          Bukti komitmen kami dalam memberikan pendidikan berkualitas
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={index}
              className={`group p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 ${achievement.border}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r ${achievement.gradient}`}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-center">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {achievement.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
