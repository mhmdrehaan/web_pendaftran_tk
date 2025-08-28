import { BookOpen, Users, Award, Star, Sparkles } from "lucide-react";

const whyChooseUs = [
  {
    icon: BookOpen,
    color: "from-emerald-500 to-blue-500",
    badgeColor: "from-yellow-400 to-orange-400",
    badgeIcon: Sparkles,
    title: "Kurikulum Terintegrasi",
    description:
      "Menggabungkan pendidikan umum berkualitas dengan nilai-nilai Islam yang kuat, menciptakan pembelajaran holistik untuk perkembangan optimal anak",
    hover: "hover:from-emerald-50 hover:to-blue-50",
  },
  {
    icon: Users,
    color: "from-blue-500 to-purple-500",
    badgeColor: "from-green-400 to-emerald-400",
    badgeIcon: Award,
    title: "Tenaga Pengajar Profesional",
    description:
      "Tim guru berpengalaman dan tersertifikasi dalam pendidikan anak usia dini, dengan dedikasi tinggi untuk perkembangan setiap anak",
    hover: "hover:from-blue-50 hover:to-purple-50",
  },
  {
    icon: Award,
    color: "from-purple-500 to-pink-500",
    badgeColor: "from-blue-400 to-cyan-400",
    badgeIcon: Star,
    title: "Fasilitas Lengkap & Modern",
    description:
      "Ruang kelas ber-AC, perpustakaan digital, lab komputer, playground indoor & outdoor, serta fasilitas penunjang pembelajaran terkini",
    hover: "hover:from-purple-50 hover:to-pink-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Mengapa Memilih TKIT Ar-Rahman?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan pendidikan terbaik dengan menggabungkan nilai-nilai islami dan pembelajaran modern
          </p>
        </div>

        {/* Grid Items */}
        <div className="grid md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            const BadgeIcon = item.badgeIcon;

            return (
              <div
                key={i}
                className={`group text-center space-y-6 p-8 rounded-2xl transition-all duration-300 ${item.hover}`}
              >
                <div className="relative">
                  {/* Main Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Badge Icon */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${item.badgeColor} rounded-full flex items-center justify-center`}
                  >
                    <BadgeIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
