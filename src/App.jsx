import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ImageSlider from './components/Home/ImageSlider';
import HeroSection from './components/Home/HeroSection';
import StatsSection from './components/Home/StatsSection';
import WhyChooseUs from './components/Home/WhyChooseUs';
import Achievements from './components/Home/Achievements';
import Testimonials from './components/Home/Testimonials';
import AboutSection from './components/About/AboutSection';
import ProgramsSection from './components/Programs/ProgramsSection';
import CurriculumSection from './components/Programs/CurriculumSection';
import GallerySection from './components/Gallery/GallerySection';
import RegistrationForm from './components/Registration/RegistrationForm';
import RegistrationSection from './components/Registration/RegistrationSection';
import PricingCalculator from './components/Registration/PricingCalculator';
import DocumentChecklist from './components/Registration/DocumentChecklist';
import ProgramCard from './components/Programs/ProgramCard';
import Tips from './components/Registration/Tips';
import Timeline from './components/Registration/TimeLine';
import InfoSidebar from './components/Registration/InfoSidebar'; 
import Values from './components/About/Values';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Beranda", icon: "🏠" },
    { id: "about", label: "Tentang Kami", icon: "ℹ️" },
    { id: "programs", label: "Program", icon: "📚" },
    { id: "gallery", label: "Galeri", icon: "🖼️" },
    { id: "contact", label: "Kontak", icon: "☎️" },
    { id: "registration", label: "Daftar", icon: "✨" },
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

      {/* Render berdasarkan currentSection */}
      {currentSection === "home" && (
        <>
          <HeroSection />
          <ImageSlider />
          <Timeline />
          <StatsSection />
          <WhyChooseUs />
          <Achievements />
          <Testimonials />

        </>
      )}

      {currentSection === "about" && (
      <>
<Values />

      <AboutSection />
      
      </>
     
      )}
      
      {currentSection === "programs" && (
        <>
          <ProgramsSection />
          <ProgramCard />
          <CurriculumSection />
          <Values />
        </>
      )}

      {currentSection === "gallery" && <GallerySection />}
      
      {currentSection === "registration" && (
        <>
    <InfoSidebar />
          <DocumentChecklist />
          <PricingCalculator />
          <RegistrationSection />
          <Tips />
          <RegistrationForm />
        </>
      )}

      {currentSection === "contact" && (
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-600">Kontak Kami</h2>
          <p className="text-gray-600 mt-4">📍 Perum Graha Prima, Singasari, Jonggol, Bogor</p>
          <p className="text-gray-600">📞 0812-3456-7890</p>
        </div>
      )}

      <Footer /> 
    </div>
  );
}

export default App;
