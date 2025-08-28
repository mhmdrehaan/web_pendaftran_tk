import { Sparkles, Award, Users, Trophy, ChevronRight, FileText } from "lucide-react";

const HeroSection = ({ currentSection, setCurrentSection }) => {
  return (
    <>
      {/* Home Section - Enhanced */}
      {currentSection === "home" && (
        <div className="space-y-20">
          {/* Hero Section - More Dynamic */}
          <section className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-gray-600">Alumni Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-gray-600">Guru Ahli</div>
                </div>
              </div>
            </div>
          </section>

          {/* Left Content - Enhanced */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Pendaftaran 2025 Dibuka!
              </div>

              <h1 className="text-6xl md:text-7xl font-black">
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TKIT
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ar-Rahman
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                🌟 Taman Kanak-Kanak Islam Terpadu yang mengembangkan potensi anak dengan{" "}
                <span className="font-bold text-emerald-600">pendidikan berkualitas</span> dan{" "}
                <span className="font-bold text-blue-600">nilai-nilai islami</span> yang kuat.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <Award className="w-5 h-5" />
                  Akreditasi B
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <Users className="w-5 h-5" />
                  15+ Tahun Berpengalaman
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <Trophy className="w-5 h-5" />
                  Juara Tahfidz
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentSection("registration")}
                className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Daftar Sekarang
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentSection("about")}
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500/90 to-blue-500/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold shadow-xl">
              🎓 Pendidikan Berkualitas
            </div>

            <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ Akreditasi A
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
