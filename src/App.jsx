// import React from 'react';  
import { useState } from 'react';
import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';
import HeroSection from './components/Home/HeroSection';
import StatsSection from './components/Home/StatsSection';
import WhyChooseUs from './components/Home/WhyChooseUs';
import Achievements from './components/Home/Achievements';
import Testimonials from './components/Home/Testimonials';
import AboutSection from './components/About/AboutSection';
import ProgramsSection from './components/Programs/ProgramsSection';
import CurriculumSection from './components/Programs/CurriculumSection';
import GallerySection from './components/Gallery/GallerySection';
import RegistrationSection from './components/Registration/RegistrationSection';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ inisialisasi navigationItems (isi sesuai kebutuhanmu)
  const navigationItems = [
    { id: "home", label: "Beranda", icon: "🏠" },
    { id: "about", label: "Tentang Kami", icon: "ℹ️" },
    { id: "programs", label: "Program", icon: "📚" },
    { id: "gallery", label: "Galeri", icon: "🖼️" },
    { id: "contact", label: "Kontak", icon: "☎️" },
    { id: "registration", label: "Daftar", icon: "✨" }, // terakhir buat tombol khusus
  ];

  return (
    <div className="App">
      <Header 
      currentSection={currentSection} 
      setCurrentSection={setCurrentSection}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      navigationItems={navigationItems} 
    />
      
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
      <AboutSection />
      <ProgramsSection />
      <CurriculumSection />
      <GallerySection />
      <RegistrationSection />
      {/* <Footer />  */}
    </div>
  );
}

export default App;