import { Calendar } from "lucide-react";

export default function Timeline() {
  const phases = [
    { 
      phase: "Gelombang I", 
      date: "Januari - Maret 2025", 
      status: "active",
      color: "emerald",
      discount: "Hemat Rp 500.000",
      icon: "🚀",
      details: "Pendaftaran dibuka dengan promo menarik"
    },
    { 
      phase: "Gelombang II", 
      date: "April - Juni 2025", 
      status: "upcoming",
      color: "blue",
      discount: "Hemat Rp 250.000",
      icon: "⏰",
      details: "Kesempatan terakhir dengan diskon"
    },
    { 
      phase: "Orientasi & Persiapan", 
      date: "Juni 2025", 
      status: "future",
      color: "purple",
      discount: "Program Pengenalan",
      icon: "🎒",
      details: "Persiapan masuk tahun ajaran baru"
    },
    { 
      phase: "Tahun Ajaran Baru", 
      date: "Juli 2025", 
      status: "future",
      color: "pink",
      discount: "Mulai Belajar! 🎓",
      icon: "🌟",
      details: "Dimulainya perjalanan pendidikan"
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
      <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        🗓️ Timeline Pendaftaran
      </h3>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
        
        {/* Timeline Items */}
        <div className="space-y-10">
          {phases.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl z-10 shadow-lg ${
                item.status === 'active' ? 'bg-gradient-to-br from-emerald-400 to-green-500 animate-pulse' :
                item.status === 'upcoming' ? 'bg-gradient-to-br from-blue-400 to-cyan-500' :
                item.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-violet-500' :
                'bg-gradient-to-br from-pink-400 to-rose-500'
              }`}>
                {item.icon}
              </div>

              {/* Card */}
              <div className="ml-6 flex-1">
                <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                  item.status === 'active' ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-300' :
                  item.status === 'upcoming' ? 'bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300' :
                  item.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-300' :
                  'bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-300'
                }`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`font-bold text-xl ${
                      item.color === 'emerald' ? 'text-emerald-700' :
                      item.color === 'blue' ? 'text-blue-700' :
                      item.color === 'purple' ? 'text-purple-700' :
                      'text-pink-700'
                    }`}>
                      {item.phase}
                      {item.status === 'active' && (
                        <span className="ml-3 px-3 py-1 bg-green-500 text-white text-sm rounded-full animate-bounce">
                          BUKA SEKARANG!
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="text-gray-700 font-medium mb-2">{item.date}</div>
                  <div className="text-sm text-gray-600 mb-3">{item.details}</div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    item.color === 'emerald' ? 'bg-emerald-200 text-emerald-800' :
                    item.color === 'blue' ? 'bg-blue-200 text-blue-800' :
                    item.color === 'purple' ? 'bg-purple-200 text-purple-800' :
                    'bg-pink-200 text-pink-800'
                  }`}>
                    ✨ {item.discount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
