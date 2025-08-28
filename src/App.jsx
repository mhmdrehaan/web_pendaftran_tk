import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './component/Layout/footer.jsx';
import SsctionTk from './component/section/SectionTk.jsx'
import { Menu, X, Phone, Mail, MapPin, Users, BookOpen, Award, ChevronRight, Send, Calendar, Clock, Star, CheckCircle, AlertCircle, Loader2, ChevronLeft, Heart, Globe, Shield, Sparkles, Target, Trophy, GraduationCap, PlayCircle, FileText, Camera } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    namaOrtu: '',
    noTelepon: '',
    email: '',
    alamat: '',
    program: ''
  });

// Enhanced kindergarten images for slider
const kindergartenImages = [
  {
    url: "/assets/img/tk1.jpg",
    title: "Fasilitas Multimedia Interaktif",
    description: "Lingkungan belajar yang kondusif dengan fasilitas multimedia untuk pembelajaran interaktif"
  },
  {
    url: "/assets/img/tk2.jpg",
    title: "Pembelajaran Aktif & Menyenangkan",
    description: "Metode pembelajaran berbasis aktivitas yang mengembangkan kreativitas dan kecerdasan anak"
  },
  {
    url: "/assets/img/tk3.jpg",
    title: "Bermain Sambil Belajar",
    description: "Kombinasi sempurna antara fun learning dan pencapaian target pembelajaran efektif"
  },
  {
    url: "/assets/img/tk4.jpg",
    title: "Playground & Fasilitas Olahraga",
    description: "Area bermain yang aman dan lengkap untuk mengembangkan motorik kasar anak"
  },
  {
    url: "/assets/img/tk5.jpg",
    title: "Seni, Kreativitas & Kerajinan",
    description: "Studio seni lengkap untuk mengasah bakat dan kreativitas melalui berbagai kegiatan artistik"
  },
  {
    url: "/assets/img/tk6.jpg",
    title: "Kegiatan Islami & Character Building",
    description: "Program tahfidz, sholat berjamaah, dan pembentukan akhlak mulia dalam kehidupan sehari-hari"
  }
];
  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kindergartenImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // Auto testimonial rotation
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % kindergartenImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + kindergartenImages.length) % kindergartenImages.length);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const response = await axios.post('https://b.arrahman.site/api/users/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      setSubmitStatus('success');
    } 
    else if (response.status === 400) {
      setSubmitStatus('email_exists');
    } 
      else if (response.status === 401) {
      setSubmitStatus('null');
      }
    else {
      setSubmitStatus('error');
    }
  
  } catch (error) { 
    console.error('Error message:', error.message);  // Logs specific error message
    if (error.response) {
      console.error('Response data:', error.response.data);  // Logs the response data
      setSubmitStatus(error.response.data.message === 'Email sudah terdaftar, gunakan email lain.');
       setSubmitStatus('email_exists');
    } else if (error.request) {
      console.error('Request data:', error.request);  // Logs request data if no response
      setSubmitStatus('error');
    } else {
      console.error('Error message:', error.message);  // Logs general error message
      setSubmitStatus('error');
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const programs = [
    {
      title: "Program Reguler",
      duration: "07.30 - 11.30 WIB",
      price: "Rp 350.000/bulan",
      description: "Program pembelajaran standar dengan kurikulum terintegrasi yang menggabungkan pendidikan umum dan nilai-nilai islami",
      features: [
        "Tahfidz Al-Quran & Hadits",
        "Bahasa Arab & Inggris dasar", 
        "Matematika & Sains sederhana",
        "Seni, kreativitas & kerajinan",
        "Olahraga & kesehatan",
        "Character building islami"
      ],
      color: "emerald",
      popular: false
    },
    {
      title: "Program Full Day",
      duration: "07.30 - 15.30 WIB", 
      price: "Rp 450.000/bulan",
      description: "Program pembelajaran extended dengan aktivitas pengembangan diri yang lebih komprehensif",
      features: [
        "Semua fitur program reguler",
        "Makan siang bergizi seimbang",
        "Ekstrakurikuler pilihan",
        "Bimbingan tugas & PR",
        "English club & Arabic club",
        "Life skills & kemandirian"
      ],
      color: "blue",
      popular: true
    }
  ];

  const facilities = [
    { icon: BookOpen, name: "Perpustakaan Digital", desc: "Koleksi buku islami, ensiklopedia anak, dan akses e-book pembelajaran", color: "emerald" },
    { icon: Users, name: "Ruang Kelas Smart", desc: "AC, proyektor interaktif, sound system, kapasitas maksimal 18 siswa per kelas", color: "blue" },
    { icon: GraduationCap, name: "Lab Komputer", desc: "20 unit komputer dengan software edukasi dan akses internet terkontrol", color: "purple" },
    { icon: Star, name: "Masjid Mini", desc: "Tempat ibadah dengan sound system, sajadah anak, dan perpustakaan islami", color: "amber" },
    { icon: PlayCircle, name: "Indoor Playground", desc: "Area bermain dalam ruangan dengan mainan edukatif dan safety standard", color: "pink" },
    { icon: Shield, name: "Klinik Kesehatan", desc: "Ruang UKS dengan perawat jaga dan koordinasi dengan dokter anak", color: "green" }
  ];

  const testimonials = [
    {
      name: "Bu Sari Amelia",
      role: "Wali Murid - Aisyah (5 tahun)",
      text: "Alhamdulillah, sejak bersekolah di TKIT Ar-Rahman, Aisyah jadi lebih mandiri, sopan, dan senang mengaji. Guru-gurunya sangat sabar dan perhatian.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Pak Ahmad Rizki",
      role: "Wali Murid - Muhammad Farid (4 tahun)", 
      text: "Sistem pembelajaran yang islami dan modern sangat membantu perkembangan anak. Farid sekarang sudah hafal 5 surat pendek dan bisa baca hijaiyah.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Bu Dewi Sartika",
      role: "Wali Murid - Zahra (5 tahun)",
      text: "Fasilitas sekolah lengkap dan bersih. Zahra sangat antusias belajar, terutama saat kegiatan seni dan berkebun. Terima kasih TKIT Ar-Rahman!",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "Pak Budi Santoso", 
      role: "Wali Murid - Adrian (4 tahun)",
      text: "Komunikasi dengan orangtua sangat baik melalui grup WhatsApp dan laporan harian. Kami bisa memantau perkembangan Adrian dengan detail.",
      rating: 5,
      image: "👨‍⚕️"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "Juara 1 Lomba Tahfidz", desc: "Tingkat Kabupaten Siak 2024", color: "yellow" },
    { icon: Award, title: "Sekolah Adiwiyata", desc: "Peduli Lingkungan 2023-2024", color: "green" },
    { icon: Star, title: "Akreditasi B", desc: "Dari Dinas Pendidikan Kab.BOGOR", color: "blue" },
    { icon: Target, title: "ISO 9001:2015", desc: "Standar Manajemen Mutu", color: "purple" }
  ];

  const navigationItems = [
    { id: 'home', label: 'Beranda', icon: '🏠' },
    { id: 'about', label: 'Tentang', icon: '📋' },
    { id: 'programs', label: 'Program', icon: '🎓' },
    { id: 'gallery', label: 'Galeri', icon: '📷' },
    { id: 'registration', label: 'Daftar', icon: '📝' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <BookOpen className="text-white w-7 h-7 transform -rotate-12" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  TKIT Ar-Rahman
                </h1>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Perum Graha Prima, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navigationItems.slice(0, -1).map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    currentSection === item.id 
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105' 
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => setCurrentSection('registration')}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Daftar Sekarang
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-xl transition-all flex items-center gap-3 ${
                    currentSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Sections */}
      <SsctionTk/>
      {/* Enhanced Footer */}
      <Footer/>
      
    </div>
  );
}