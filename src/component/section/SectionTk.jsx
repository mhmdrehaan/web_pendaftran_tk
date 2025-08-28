
import React, { useState } from "react";
import axios from "axios";
import { Trophy, GraduationCap, Users, Heart, BookOpen, Sparkles, Award, Star, Target, ChevronRight, CheckCircle, Loader2, Send, FileText, AlertCircle, Camera, Calendar, Phone, Mail, Clock } from "lucide-react"; 

export default function SectionTk({ currentSection, setCurrentSection }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tanggalLahir: "",
    jenisKelamin: "",
    namaOrtu: "",
    noTelepon: "",
    email: "",
    program: "",
    alamat: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://b.arrahman.site/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setSubmitStatus("success");
      } else if (response.status === 400) {
        setSubmitStatus("email_exists");
      } else if (response.status === 401) {
        setSubmitStatus("null");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error message:", error.message); // Logs specific error message
      if (error.response) {
        console.error("Response data:", error.response.data); // Logs the response data
        setSubmitStatus(
          error.response.data.message ===
            "Email sudah terdaftar, gunakan email lain."
        );
        setSubmitStatus("email_exists");
      } else if (error.request) {
        console.error("Request data:", error.request); // Logs request data if no response
        setSubmitStatus("error");
      } else {
        console.error("Error message:", error.message); // Logs general error message
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Home Section - Enhanced */}
      {currentSection === 'home' && (
        <div className="space-y-20">
          {/* Hero Section - More Dynamic */}
          <section className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                    🌟 Taman Kanak-Kanak Islam Terpadu yang mengembangkan potensi anak dengan 
                    <span className="font-bold text-emerald-600"> pendidikan berkualitas</span> dan 
                    <span className="font-bold text-blue-600"> nilai-nilai islami</span> yang kuat
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
                    onClick={() => setCurrentSection('registration')}
                    className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Daftar Sekarang
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setCurrentSection('about')}
                    className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Pelajari Lebih Lanjut
                  </button>
                </div>

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

              {/* Right Content - Enhanced Image Slider */}
              <div className="relative">
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    {kindergartenImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                          index === currentSlide 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      >
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        
                        {/* Enhanced Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-2xl font-bold mb-3">{image.title}</h3>
                            <p className="text-emerald-100 leading-relaxed">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Navigation */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-7 h-7 group-hover:scale-125 transition-transform" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-7 h-7 group-hover:scale-125 transition-transform" />
                  </button>

                  {/* Enhanced Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {kindergartenImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white w-8 scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500/90 to-blue-500/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold shadow-xl">
                    🎓 Pendidikan Berkualitas
                  </div>

                  <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Akreditasi A
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Tahun Berpengalaman</div>
              </div>
              
              <div className="group text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-blue-600 mb-2">200+</div>
                <div className="text-gray-600 font-semibold">Alumni Sukses</div>
              </div>
              
              <div className="group text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-purple-600 mb-2">15</div>
                <div className="text-gray-600 font-semibold">Guru Profesional</div>
              </div>
              
              <div className="group text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-pink-600 mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Kepuasan Orangtua</div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Choose Us Section */}
          <section className="container mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Mengapa Memilih TKIT Ar-Rahman?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Kami berkomitmen memberikan pendidikan terbaik dengan menggabungkan nilai-nilai islami dan pembelajaran modern
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-blue-50 transition-all duration-300">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Kurikulum Terintegrasi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menggabungkan pendidikan umum berkualitas dengan nilai-nilai Islam yang kuat, 
                    menciptakan pembelajaran holistik untuk perkembangan optimal anak
                  </p>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Tenaga Pengajar Profesional</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tim guru berpengalaman dan tersertifikasi dalam pendidikan anak usia dini, 
                    dengan dedikasi tinggi untuk perkembangan setiap anak
                  </p>
                </div>
                
                <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Fasilitas Lengkap & Modern</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ruang kelas ber-AC, perpustakaan digital, lab komputer, playground indoor & outdoor, 
                    serta fasilitas penunjang pembelajaran terkini
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Achievements Section */}
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                🏆 Prestasi & Penghargaan
              </h2>
              <p className="text-xl text-gray-600">
                Bukti komitmen kami dalam memberikan pendidikan berkualitas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className={`group p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 ${
                    achievement.color === 'yellow' ? 'border-yellow-400' :
                    achievement.color === 'green' ? 'border-green-400' :
                    achievement.color === 'blue' ? 'border-blue-400' :
                    'border-purple-400'
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                      achievement.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      achievement.color === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      achievement.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                      'bg-gradient-to-r from-purple-400 to-violet-400'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-center">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Enhanced Testimonials Section */}
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                💬 Testimoni Orangtua
              </h2>
              <p className="text-xl text-gray-600">
                Apa kata orangtua tentang pengalaman anak-anak mereka di TKIT Ar-Rahman
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center">
                {/* Testimonial Content */}
                <div className="mb-8">
                  <div className="text-6xl mb-6">{testimonials[activeTestimonial].image}</div>
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <div className="font-bold text-xl text-gray-800">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-emerald-600 font-semibold">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Enhanced About Section */}
      {currentSection === 'about' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                📋 Tentang TKIT Ar-Rahman
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Didirikan dengan <span className="font-bold text-emerald-600">visi mulia</span> mencetak generasi Qur'ani yang 
                <span className="font-bold text-blue-600"> berakhlak mulia, cerdas, dan siap menghadapi masa depan</span>
              </p>
            </div>

            <div className="space-y-16">
              {/* Enhanced Visi Misi */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl shadow-2xl p-10 border border-emerald-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-emerald-700">Visi Kami</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Menjadi lembaga pendidikan Islam terdepan yang mencetak generasi Qur'ani, 
                    berkarakter kuat, cerdas, kreatif, dan siap menghadapi tantangan global 
                    dengan tetap berpegang teguh pada nilai-nilai keislaman.
                  </p>
                </div>
                
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
                      <span>Menyelenggarakan pendidikan berkualitas dengan kurikulum terintegrasi Islam dan umum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Membentuk karakter islami dan akhlakul karimah pada setiap peserta didik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Mengembangkan potensi akademik, kreativitas, dan keterampilan hidup anak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Menciptakan lingkungan belajar yang kondusif, aman, dan islami</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enhanced Facilities */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🏫 Fasilitas Sekolah
                  </h3>
                  <p className="text-xl text-gray-600">
                    Fasilitas lengkap dan modern untuk mendukung proses pembelajaran yang optimal
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {facilities.map((facility, index) => {
                    const IconComponent = facility.icon;
                    return (
                      <div key={index} className={`group text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        facility.color === 'emerald' ? 'hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50' :
                        facility.color === 'blue' ? 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50' :
                        facility.color === 'purple' ? 'hover:bg-gradient-to-br hover:from-purple-50 hover:to-violet-50' :
                        facility.color === 'amber' ? 'hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50' :
                        facility.color === 'pink' ? 'hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50' :
                        'hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50'
                      }`}>
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg ${
                          facility.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                          facility.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          facility.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-500' :
                          facility.color === 'amber' ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                          facility.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-rose-500' :
                          'bg-gradient-to-r from-green-500 to-emerald-500'
                        }`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-gray-800 mb-4">{facility.name}</h4>
                        <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Values */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl p-12 border border-gray-200">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                    ⭐ Nilai-Nilai Sekolah
                  </h3>
                  <p className="text-xl text-gray-600">
                    Fondasi karakter yang kami bangun pada setiap anak didik
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-5xl mb-4">🕌</div>
                    <h4 className="font-bold text-xl text-emerald-600 mb-4">Religius</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Menumbuhkan kecintaan mendalam terhadap Allah SWT, Rasul-Nya, dan ajaran Islam
                    </p>
                  </div>
                  
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-5xl mb-4">🧠</div>
                    <h4 className="font-bold text-xl text-blue-600 mb-4">Cerdas</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Mengembangkan kecerdasan intelektual, emosional, dan spiritual secara seimbang
                    </p>
                  </div>
                  
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-5xl mb-4">🤝</div>
                    <h4 className="font-bold text-xl text-purple-600 mb-4">Santun</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Membentuk akhlakul karimah, sopan santun, dan budi pekerti yang luhur
                    </p>
                  </div>
                  
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-5xl mb-4">💪</div>
                    <h4 className="font-bold text-xl text-orange-600 mb-4">Mandiri</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Membangun kemandirian, tanggung jawab, dan kepercayaan diri anak
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Programs Section */}
      {currentSection === 'programs' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                🎓 Program Pendidikan
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Pilihan program pembelajaran yang disesuaikan dengan kebutuhan perkembangan anak dan keluarga,
                <span className="font-bold text-emerald-600"> dengan pendekatan holistik dan islami</span>
              </p>
            </div>

            {/* Enhanced Program Cards */}
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {programs.map((program, index) => (
                <div key={index} className={`relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-102 border-2 ${
                  program.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-300' : 'border-blue-200 hover:border-blue-300'
                }`}>
                  
                  {/* Popular Badge */}
                  {program.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                        ⭐ PALING POPULER
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                        program.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      }`}>
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">{program.title}</h3>
                        <p className={`font-bold text-lg ${program.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'}`}>
                          {program.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-black ${program.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'}`}>
                        {program.price}
                      </div>
                      <div className="text-sm text-gray-500 line-through">Rp 400.000/bln</div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">{program.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-xl text-gray-800 mb-6">✨ Fitur Program:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-center p-3 rounded-xl transition-all hover:scale-105 ${
                          program.color === 'emerald' ? 'bg-emerald-50 hover:bg-emerald-100' : 'bg-blue-50 hover:bg-blue-100'
                        }`}>
                          <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                            program.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                          }`} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => setCurrentSection('registration')}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      program.color === 'emerald' 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                    }`}
                  >
                    Pilih Program Ini
                  </button>
                </div>
              ))}
            </div>

            {/* Enhanced Curriculum Section */}
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-gray-200">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  📚 Kurikulum Pembelajaran
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Kurikulum komprehensif yang menggabungkan pendidikan akademik, pengembangan karakter, dan nilai-nilai islami
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Academic */}
                <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🧮</div>
                  <h4 className="font-bold text-2xl text-blue-700 mb-6">Akademik</h4>
                  <ul className="text-gray-700 space-y-3 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Matematika dasar & logika</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Bahasa Indonesia & literasi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Bahasa Inggris & conversation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Sains sederhana & eksperimen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Pengenalan teknologi</span>
                    </li>
                  </ul>
                </div>

                {/* Islamic Education */}
                <div className="group text-center p-8 bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📿</div>
                  <h4 className="font-bold text-2xl text-emerald-700 mb-6">Pendidikan Islam</h4>
                  <ul className="text-gray-700 space-y-3 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Tahfidz Al-Quran & Hadits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Bahasa Arab & kaligrafi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Fiqih ibadah & akhlak</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Sirah Nabawiyah</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Praktik ibadah harian</span>
                    </li>
                  </ul>
                </div>

                {/* Character Development */}
                <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
                  <h4 className="font-bold text-2xl text-purple-700 mb-6">Pengembangan Diri</h4>
                  <ul className="text-gray-700 space-y-3 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Seni & kerajinan tangan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Olahraga & kesehatan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Musik & gerak lagu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Keterampilan sosial</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Life skills & kemandirian</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Daily Schedule Preview */}
              <div className="mt-12 bg-white/80 rounded-2xl p-8 border border-gray-200">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">⏰ Jadwal Harian Siswa</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-emerald-600 mb-4 text-lg">Program Reguler</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-2 bg-emerald-50 rounded-lg">
                        <span>07.30 - 08.00</span>
                        <span>Morning Circle & Doa</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span>08.00 - 09.00</span>
                        <span>Tahfidz & Pendidikan Islam</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-emerald-50 rounded-lg">
                        <span>09.00 - 09.30</span>
                        <span>Snack Time & Istirahat</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span>09.30 - 10.30</span>
                        <span>Pembelajaran Tematik</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-emerald-50 rounded-lg">
                        <span>10.30 - 11.30</span>
                        <span>Aktivitas Seni & Permainan</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-600 mb-4 text-lg">Program Full Day</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                        <span>07.30 - 11.30</span>
                        <span>Kegiatan Program Reguler</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span>11.30 - 12.30</span>
                        <span>Makan Siang & Dzuhur</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                        <span>12.30 - 13.30</span>
                        <span>Istirahat & Quiet Time</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span>13.30 - 14.30</span>
                        <span>Ekstrakurikuler</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                        <span>14.30 - 15.30</span>
                        <span>Review & Closing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {currentSection === 'gallery' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                📷 Galeri Kegiatan
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
                Momen-momen berharga dalam perjalanan pendidikan anak-anak di TKIT Ar-Rahman
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {kindergartenImages.map((image, index) => (
                <div key={index} className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <Camera className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl border-2 border-emerald-200">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-emerald-700 mb-2">Kegiatan Belajar</h3>
                <p className="text-sm text-gray-600">Suasana pembelajaran yang menyenangkan dan interaktif</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl border-2 border-blue-200">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-blue-700 mb-2">Seni & Kreativitas</h3>
                <p className="text-sm text-gray-600">Mengeksplorasi bakat seni dan kreativitas anak</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl border-2 border-purple-200">
                <div className="text-4xl mb-4">🕌</div>
                <h3 className="font-bold text-purple-700 mb-2">Kegiatan Islami</h3>
                <p className="text-sm text-gray-600">Pembinaan akhlak dan praktik ibadah sehari-hari</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl border-2 border-orange-200">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-bold text-orange-700 mb-2">Event & Perayaan</h3>
                <p className="text-sm text-gray-600">Momen spesial dan perayaan bersama</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Registration Section */}
      {currentSection === 'registration' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                📝 Pendaftaran Siswa Baru 2025
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                Bergabunglah dengan keluarga besar TKIT Ar-Rahman untuk masa depan anak yang 
                <span className="font-bold text-emerald-600"> gemilang dan berakhlak mulia</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Enhanced Registration Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-200">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Form Pendaftaran</h3>
                      <p className="text-gray-600">Silakan lengkapi data di bawah ini dengan benar</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Progress Steps */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
                        <div className="ml-4">
                          <div className="font-bold text-gray-800">Isi Form</div>
                          <div className="text-sm text-gray-600">Data pendaftaran lengkap</div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">2</div>
                        <div className="ml-4">
                          <div className="font-bold text-gray-600">Verifikasi</div>
                          <div className="text-sm text-gray-500">Tim sekolah meninjau</div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">3</div>
                        <div className="ml-4">
                          <div className="font-bold text-gray-600">Konfirmasi</div>
                          <div className="text-sm text-gray-500">Diterima & orientasi</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full w-1/3 shadow-sm"></div>
                    </div>
                  </div>

                  {/* Enhanced Tips */}
                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                        <Sparkles className="text-white w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-blue-800 mb-3">💡 Tips Pengisian Form:</div>
                        <ul className="text-blue-700 space-y-2 text-sm">
                          <li>✅ Pastikan data sesuai dengan dokumen resmi</li>
                          <li>📱 Nomor telepon harus aktif untuk konfirmasi</li>
                          <li>📧 Email akan digunakan untuk komunikasi lanjutan</li>
                          <li>🏠 Alamat lengkap membantu kami dalam koordinasi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-2xl text-green-800 mb-2">🎉 Pendaftaran Berhasil!</div>
                          <div className="text-green-700 mb-2">
                            Terima kasih telah mendaftar di TKIT Ar-Rahman. Tim kami akan menghubungi Anda dalam 1x24 jam.
                          </div>
                          <div className="text-sm text-green-600">
                            📞 Jika ada pertanyaan mendesak, hubungi: <span className="font-bold">085810111004</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-red-800 mb-2">❌ Gagal Mengirim Pendaftaran</div>
                          <div className="text-red-700 mb-2">
                            Terjadi kendala teknis. Silakan coba lagi atau hubungi kami langsung.
                          </div>
                          <div className="text-sm text-red-600">
                            📞 Hubungi: <span className="font-bold">085810111004</span> | 
                            📧 Email: <span className="font-bold">tarraahman00@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                    {submitStatus === 'email_exists' && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-red-800 mb-2">❌ Sudah Terdaftar Email</div>
                          <div className="text-red-700 mb-2">
                            Terjadi kendala teknis. Silakan coba lagi atau hubungi kami langsung.
                          </div>
                          <div className="text-sm text-red-600">
                            📞 Hubungi: <span className="font-bold">085810111004</span> | 
                            📧 Email: <span className="font-bold">tarraahman00@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {submitStatus === 'null' && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-red-800 mb-2">❌ Data tidak boleh kosong</div>
                          <div className="text-red-700 mb-2">
                            Terjadi kendala teknis. Silakan coba lagi atau hubungi kami langsung.
                          </div>
                          <div className="text-sm text-red-600">
                            📞 Hubungi: <span className="font-bold">085810111004</span> | 
                            📧 Email: <span className="font-bold">tarraahman00@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          👶 Nama Lengkap Anak *
                        </label>
                        <input
                          type="text"
                          name="namaLengkap"
                          value={formData.namaLengkap}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                          placeholder="Masukkan nama lengkap anak"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          📅 Tanggal Lahir *
                        </label>
                        <input
                          type="date"
                          name="tanggalLahir"
                          value={formData.tanggalLahir}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        👫 Jenis Kelamin *
                      </label>
                      <select
                        name="jenisKelamin"
                        value={formData.jenisKelamin}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                      >
                        <option value="">Pilih jenis kelamin</option>
                        <option value="laki-laki">👦 Laki-laki</option>
                        <option value="perempuan">👧 Perempuan</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          👨‍👩‍👧‍👦 Nama Orangtua/Wali *
                        </label>
                        <input

                          type="text"
                          name="namaOrtu"
                          value={formData.namaOrtu}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                          placeholder="Nama ayah/ibu/wali"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          📱 No. Telepon/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="noTelepon"
                          value={formData.noTelepon}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        📧 Alamat Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                        placeholder="email@contoh.com (opsional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        🎓 Program yang Dipilih *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black"
                      >
                        <option value="">Pilih program pembelajaran</option>
                        <option value="reguler">🌅 Program Reguler (07.30 - 11.30) - Rp 350.000/bulan</option>
                        <option value="fullday">🌤️ Program Full Day (07.30 - 15.30) - Rp 450.000/bulan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        🏠 Alamat Lengkap *
                      </label>
                      <textarea
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        disabled={isSubmitting}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-black transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-lg bg-white text-black resize-none"
                        placeholder="Masukkan alamat lengkap (jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota)"
                      ></textarea>
                    </div>

                    {/* Enhanced Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Mengirim Pendaftaran...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Kirim Pendaftaran Sekarang
                        </>
                      )}
                    </button>

                    <div className="text-center text-sm text-gray-600 mt-6 p-4 bg-gray-50 rounded-xl">
                      <p className="mb-2">🔒 <strong>Data Anda Aman:</strong> Kami menjaga kerahasiaan informasi pribadi Anda</p>
                      <p>Dengan mendaftar, Anda menyetujui <span className="text-emerald-600 font-bold">Syarat & Ketentuan</span> kami</p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Enhanced Info Sidebar */}
              <div className="space-y-8">
                {/* Live Counter */}
                <div className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                        <Users className="w-10 h-10" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-4">Pendaftaran 2025</h3>
                    <div className="text-5xl font-black mb-3 bg-white/20 backdrop-blur-sm rounded-2xl py-4">142</div>
                    <div className="text-emerald-100 text-lg mb-6">siswa telah mendaftar</div>
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <div className="text-sm mb-2">⚡ Kuota terbatas!</div>
                      <div className="font-bold text-lg">Sisa: <span className="text-yellow-300">18 tempat</span></div>
                      <div className="w-full bg-white/20 rounded-full h-3 mt-3">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Document Checklist */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    📋 Dokumen Diperlukan
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { doc: "Usia minimal 4 tahun pada 1 Juli 2025", icon: "🎂", required: true },
                      { doc: "Fotokopi Akta Kelahiran (2 lembar)", icon: "📄", required: true },
                      { doc: "Fotokopi Kartu Keluarga (2 lembar)", icon: "👨‍👩‍👧‍👦", required: true },
                      { doc: "Pas foto anak 3x4 (4 lembar)", icon: "📷", required: true },
                      { doc: "Fotokopi KTP orangtua (2 lembar)", icon: "🆔", required: true },
                      { doc: "Surat keterangan sehat dari dokter", icon: "🏥", required: false }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        item.required 
                          ? 'bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 hover:border-red-300' 
                          : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-300'
                      }`}>
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 ${item.required ? 'text-red-700' : 'text-blue-700'}`}>
                            <span className="font-medium">{item.doc}</span>
                            {item.required && <span className="text-red-500 font-bold">*</span>}
                          </div>
                          {!item.required && <span className="text-blue-500 text-sm">(opsional)</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                      <div>
                        <div className="font-bold text-amber-800 mb-2">⚠️ Penting!</div>
                        <div className="text-sm text-amber-700 leading-relaxed">
                          Dokumen asli wajib dibawa saat verifikasi dan wawancara di sekolah. 
                          Pastikan semua fotokopi jelas dan mudah dibaca.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Timeline */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    🗓️ Timeline Pendaftaran
                  </h3>
                  
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                    
                    <div className="space-y-10">
                      {[
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
                      ].map((item, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl z-10 shadow-lg ${
                            item.status === 'active' ? 'bg-gradient-to-br from-emerald-400 to-green-500 animate-pulse' :
                            item.status === 'upcoming' ? 'bg-gradient-to-br from-blue-400 to-cyan-500' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-violet-500' :
                            'bg-gradient-to-br from-pink-400 to-rose-500'
                          }`}>
                            {item.icon}
                          </div>
                          
                          <div className="ml-6 flex-1">
                            <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                              item.status === 'active' ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-300' :
                              item.status === 'upcoming' ? 'bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300' :
                              item.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-300' :
                              'bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-300'
                            }`}>
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

                {/* Enhanced Pricing Calculator */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">💰</span>
                    </div>
                    Rincian Biaya Pendidikan
                  </h3>
                  
                  <div className="space-y-8">
                    {/* Program Comparison */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 border-2 border-emerald-200 rounded-2xl bg-emerald-50 hover:border-emerald-400 transition-all cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-emerald-700 text-lg">Program Reguler</div>
                            <div className="text-sm text-emerald-600">07.30-11.30 WIB</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-2xl text-emerald-800">350K</div>
                            <div className="text-xs text-gray-500">/bulan</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border-2 border-blue-200 rounded-2xl bg-blue-50 hover:border-blue-400 transition-all cursor-pointer relative">
                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          POPULER
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-blue-700 text-lg">Program Full Day</div>
                            <div className="text-sm text-blue-600">07.30-15.30 WIB</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-2xl text-blue-800">450K</div>
                            <div className="text-xs text-gray-500">/bulan</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                      <h4 className="font-bold text-gray-800 mb-6 text-lg">💳 Rincian Biaya (Gelombang I):</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-700 font-medium">💎 Uang Pangkal</span>
                          <div className="text-right">
                            <span className="text-gray-400 line-through text-sm">Rp 4.500.000</span>
                            <div className="font-bold text-xl text-emerald-600">Rp 4.000.000</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-700 font-medium">📚 SPP Reguler/bulan</span>
                          <span className="font-bold text-lg text-gray-800">Rp 350.000</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-700 font-medium">👕 Seragam & Perlengkapan</span>
                          <span className="font-bold text-lg text-gray-800">Rp 800.000</span>
                        </div>
                        <div className="flex justify-between items-center py-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl px-6 border-2 border-emerald-300">
                          <span className="font-bold text-xl text-gray-800">🎯 Total Biaya Awal</span>
                          <span className="font-bold text-2xl text-emerald-600">Rp 5.150.000</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-300">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">🎉</div>
                          <div>
                            <div className="font-bold text-green-800 text-lg">Hemat Rp 500.000!</div>
                            <div className="text-sm text-green-700">Dengan mendaftar di Gelombang I sekarang juga!</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Options */}
                    <div>
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">💳 Opsi Pembayaran Fleksibel:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-green-50 border-2 border-green-200 rounded-2xl hover:border-green-400 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">💳</div>
                            <div>
                              <div className="font-bold text-green-700">Pembayaran Lunas</div>
                              <div className="text-sm text-green-600">Bayar langsung semua biaya</div>
                            </div>
                          </div>
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Diskon 5%
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl hover:border-blue-400 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">📅</div>
                            <div>
                              <div className="font-bold text-blue-700">Cicilan 2 Kali</div>
                              <div className="text-sm text-blue-600">50% saat daftar, 50% sebelum masuk</div>
                            </div>
                          </div>
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            0% Bunga
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-purple-50 border-2 border-purple-200 rounded-2xl hover:border-purple-400 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">🏦</div>
                            <div>
                              <div className="font-bold text-purple-700">Cicilan 3 Kali</div>
                              <div className="text-sm text-purple-600">Daftar, tengah tahun, akhir tahun</div>
                            </div>
                          </div>
                          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Bunga 2%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact for Consultation */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6">
                      <div className="text-center">
                        <div className="text-3xl mb-3">🤝</div>
                        <h4 className="font-bold text-orange-800 mb-2">Konsultasi Gratis!</h4>
                        <p className="text-orange-700 text-sm mb-4">
                          Butuh penjelasan lebih detail? Hubungi kami untuk konsultasi gratis
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span className="font-bold">085810111004</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span className="font-bold">tarraahman00@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      </>
);
    }

