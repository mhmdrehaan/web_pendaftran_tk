import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookOpen, Users, GraduationCap, Star, PlayCircle, Shield, Trophy, Award, Target } from "lucide-react";

export default function testimonialConfig() {
  // --- State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // --- Slider Data
  const kindergartenImages = [
    { url: "/assets/img/tk1.jpg", title: "Fasilitas Multimedia Interaktif", description: "Lingkungan belajar yang kondusif..." },
    { url: "/assets/img/tk2.jpg", title: "Pembelajaran Aktif & Menyenangkan", description: "Metode pembelajaran berbasis aktivitas..." },
    { url: "/assets/img/tk3.jpg", title: "Bermain Sambil Belajar", description: "Kombinasi fun learning dengan target..." },
    { url: "/assets/img/tk4.jpg", title: "Playground & Fasilitas Olahraga", description: "Area bermain aman & lengkap..." },
    { url: "/assets/img/tk5.jpg", title: "Seni, Kreativitas & Kerajinan", description: "Studio seni untuk mengasah bakat..." },
    { url: "/assets/img/tk6.jpg", title: "Kegiatan Islami & Character Building", description: "Program tahfidz, sholat berjamaah..." },
  ];

  // --- Testimonials
  const testimonials = [
    { name: "Bu Sari Amelia", role: "Wali Murid - Aisyah", text: "Alhamdulillah, sejak di TKIT Ar-Rahman...", rating: 5, image: "👩‍💼" },
    { name: "Pak Ahmad Rizki", role: "Wali Murid - Farid", text: "Sistem pembelajaran islami & modern...", rating: 5, image: "👨‍💼" },
    { name: "Bu Dewi Sartika", role: "Wali Murid - Zahra", text: "Fasilitas sekolah lengkap & bersih...", rating: 5, image: "👩‍🏫" },
    { name: "Pak Budi Santoso", role: "Wali Murid - Adrian", text: "Komunikasi dengan orangtua sangat baik...", rating: 5, image: "👨‍⚕️" },
  ];

  // --- Auto slide & testimonial rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kindergartenImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // --- Slider Control
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % kindergartenImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + kindergartenImages.length) % kindergartenImages.length);

  // --- Form Handler
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://b.arrahman.site/api/users/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) setSubmitStatus("success");
      else if (response.status === 400) setSubmitStatus("email_exists");
      else setSubmitStatus("error");
    } catch (error) {
      if (error.response?.data?.message?.includes("Email sudah terdaftar")) {
        setSubmitStatus("email_exists");
      } else setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Programs
  const programs = [
    {
      title: "Program Reguler", duration: "07.30 - 11.30 WIB", price: "Rp 350.000/bulan", color: "emerald", popular: false,
      features: ["Tahfidz Al-Quran", "Bahasa Arab & Inggris", "Matematika & Sains", "Seni & Kreativitas", "Olahraga", "Character building"],
    },
    {
      title: "Program Full Day", duration: "07.30 - 15.30 WIB", price: "Rp 450.000/bulan", color: "blue", popular: true,
      features: ["Semua fitur reguler", "Makan siang sehat", "Ekstrakurikuler", "Bimbingan PR", "English & Arabic club", "Life skills"],
    },
  ];

  // --- Facilities
  const facilities = [
    { icon: BookOpen, name: "Perpustakaan Digital", desc: "Koleksi buku islami & e-book", color: "emerald" },
    { icon: Users, name: "Ruang Kelas Smart", desc: "AC, proyektor, kapasitas 18 siswa", color: "blue" },
    { icon: GraduationCap, name: "Lab Komputer", desc: "20 unit komputer edukasi", color: "purple" },
    { icon: Star, name: "Masjid Mini", desc: "Tempat ibadah anak", color: "amber" },
    { icon: PlayCircle, name: "Indoor Playground", desc: "Area bermain aman", color: "pink" },
    { icon: Shield, name: "Klinik Kesehatan", desc: "Ruang UKS dengan perawat", color: "green" },
  ];

  // --- Achievements
  const achievements = [
    { icon: Trophy, title: "Juara 1 Lomba Tahfidz", desc: "Kabupaten Siak 2024", color: "yellow" },
    { icon: Award, title: "Sekolah Adiwiyata", desc: "Peduli Lingkungan 2023", color: "green" },
    { icon: Star, title: "Akreditasi B", desc: "Dinas Pendidikan Bogor", color: "blue" },
    { icon: Target, title: "ISO 9001:2015", desc: "Standar Mutu", color: "purple" },
  ];

  // --- Navigation
  const navigationItems = [
    { id: "home", label: "Beranda", icon: "🏠" },
    { id: "about", label: "Tentang", icon: "📋" },
    { id: "programs", label: "Program", icon: "🎓" },
    { id: "gallery", label: "Galeri", icon: "📷" },
    { id: "registration", label: "Daftar", icon: "📝" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden">
        {kindergartenImages.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="max-w-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
        {/* Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 text-white">⬅️</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 text-white">➡️</button>
      </section>

      {/* Testimonials */}
      <section className="p-8">
        <h3 className="text-xl font-bold mb-4">Testimoni Wali Murid</h3>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="italic">"{testimonials[activeTestimonial].text}"</p>
          <div className="mt-4 font-bold">{testimonials[activeTestimonial].name}</div>
          <div className="text-sm">{testimonials[activeTestimonial].role}</div>
        </div>
      </section>

      {/* Form Register */}
      <section className="p-8">
        <h3 className="text-xl font-bold mb-4">Formulir Pendaftaran</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Nama" value={formData.name} onChange={handleInputChange} className="border p-2 w-full" />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="border p-2 w-full" />
          <input name="phone" placeholder="No HP" value={formData.phone} onChange={handleInputChange} className="border p-2 w-full" />
          <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded">
            {isSubmitting ? "Mengirim..." : "Daftar"}
          </button>
        </form>
        {submitStatus === "success" && <p className="text-green-600 mt-2">Pendaftaran berhasil!</p>}
        {submitStatus === "email_exists" && <p className="text-red-600 mt-2">Email sudah terdaftar!</p>}
        {submitStatus === "error" && <p className="text-red-600 mt-2">Terjadi kesalahan. Coba lagi.</p>}
      </section>
    </div>
  );
}
