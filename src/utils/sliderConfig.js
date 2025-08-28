import React, { useState, useEffect } from "react";

export default function Slider() {
  const kindergartenImages = [
    {
      url: "/assets/img/tk1.jpg",
      title: "Fasilitas Multimedia Interaktif",
      description:
        "Lingkungan belajar yang kondusif dengan fasilitas multimedia untuk pembelajaran interaktif",
    },
    {
      url: "/assets/img/tk2.jpg",
      title: "Pembelajaran Aktif & Menyenangkan",
      description:
        "Metode pembelajaran berbasis aktivitas yang mengembangkan kreativitas dan kecerdasan anak",
    },
    {
      url: "/assets/img/tk3.jpg",
      title: "Bermain Sambil Belajar",
      description:
        "Kombinasi sempurna antara fun learning dan pencapaian target pembelajaran efektif",
    },
    {
      url: "/assets/img/tk4.jpg",
      title: "Playground & Fasilitas Olahraga",
      description:
        "Area bermain yang aman dan lengkap untuk mengembangkan motorik kasar anak",
    },
    {
      url: "/assets/img/tk5.jpg",
      title: "Seni, Kreativitas & Kerajinan",
      description:
        "Studio seni lengkap untuk mengasah bakat dan kreativitas melalui berbagai kegiatan artistik",
    },
    {
      url: "/assets/img/tk6.jpg",
      title: "Kegiatan Islami & Character Building",
      description:
        "Program tahfidz, sholat berjamaah, dan pembentukan akhlak mulia dalam kehidupan sehari-hari",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kindergartenImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl">
      {kindergartenImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
