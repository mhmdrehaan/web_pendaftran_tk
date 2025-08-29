import { Trophy, GraduationCap, Users, Heart } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    color: "from-emerald-500 to-green-500",
    value: "15+",
    textColor: "text-emerald-600",
    label: "Tahun Berpengalaman",
  },
  {
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    value: "200+",
    textColor: "text-blue-600",
    label: "Alumni Sukses",
  },
  {
    icon: Users,
    color: "from-purple-500 to-violet-500",
    value: "15",
    textColor: "text-purple-600",
    label: "Guru Profesional",
  },
  {
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    value: "98%",
    textColor: "text-pink-600",
    label: "Kepuasan Orangtua",
  },
];

export default function StatsSection() {
  return (
    <section className="container mx-auto px-4 mt-7 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-black ${item.textColor} mb-2`}>
                {item.value}
              </div>
              <div className="text-gray-600 font-semibold">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
