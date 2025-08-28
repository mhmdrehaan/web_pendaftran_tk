// src/components/AboutSection.jsx
export default function AboutSection({ currentSection }) {
  if (currentSection !== "about") return null;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            📋 Tentang TKIT Ar-Rahman
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Didirikan dengan <span className="font-bold text-emerald-600">visi mulia</span> mencetak generasi Qur'ani yang 
            <span className="font-bold text-blue-600"> berakhlak mulia, cerdas, dan siap menghadapi masa depan</span>
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-16">
          {/* Sejarah */}
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/history.jpg" 
                alt="Sejarah TKIT Ar-Rahman" 
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-3xl font-bold text-emerald-600 mb-4">Sejarah Singkat</h3>
              <p className="text-gray-600 leading-relaxed">
                TKIT Ar-Rahman berdiri sejak tahun 2008 dengan tujuan memberikan pendidikan islami 
                yang modern. Hingga kini, ratusan alumni telah berhasil melanjutkan ke jenjang pendidikan 
                yang lebih tinggi dengan prestasi gemilang.
              </p>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Visi & Misi</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Visi kami adalah membentuk generasi Qur’ani yang unggul dalam akhlak, ilmu, dan keterampilan.
              Misi kami mencakup pembelajaran terintegrasi, pengembangan karakter, serta kolaborasi dengan orangtua.
            </p>
            <ul className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <li className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition">
                ✅ Membiasakan anak dengan nilai-nilai Islami
              </li>
              <li className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition">
                ✅ Menumbuhkan rasa cinta belajar & eksplorasi
              </li>
              <li className="p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition">
                ✅ Membangun kemandirian & kepedulian sosial
              </li>
            </ul>
          </div>

          {/* Nilai Utama */}
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
              <h3 className="text-3xl font-bold text-purple-600 mb-4">Nilai Utama</h3>
              <p className="text-gray-600 leading-relaxed">
                TKIT Ar-Rahman menjunjung tinggi nilai kejujuran, tanggung jawab, kepedulian, dan cinta ilmu.
                Nilai-nilai ini ditanamkan melalui kegiatan sehari-hari di sekolah maupun di luar kelas.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="/images/values.jpg" 
                alt="Nilai Utama TKIT Ar-Rahman" 
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
