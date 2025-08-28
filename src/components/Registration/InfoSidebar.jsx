import { Users } from "lucide-react";

export default function InfoSidebar({ 
  year = "2025", 
  registered = 142, 
  quota = 160 
}) {
  const remaining = quota - registered;
  const percentage = (registered / quota) * 100;

  return (
    <div className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

      <div className="relative">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <Users className="w-10 h-10" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-black mb-4">Pendaftaran {year}</h3>

        {/* Counter */}
        <div className="text-5xl font-black mb-3 bg-white/20 backdrop-blur-sm rounded-2xl py-4">
          {registered}
        </div>
        <div className="text-emerald-100 text-lg mb-6">
          siswa telah mendaftar
        </div>

        {/* Quota Info */}
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
          <div className="text-sm mb-2">⚡ Kuota terbatas!</div>
          <div className="font-bold text-lg">
            Sisa:{" "}
            <span className="text-yellow-300">
              {remaining > 0 ? `${remaining} tempat` : "Penuh"}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-3 mt-3">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
