import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const kindergartenImages = [
  {
    url: "/assets/img/tk1.jpg",
    title: "Kelas Nyaman",
    description: "Ruang kelas yang ceria dan edukatif.",
  },
  {
    url: "/assets/img/tk2.jpg",
    title: "Belajar Sambil Bermain",
    description: "Metode belajar kreatif untuk anak-anak.",
  },
  {
    url: "/assets/img/tk3.jpg",
    title: "Tahfidz Sehari-hari",
    description: "Menghafal Al-Qur'an sejak dini.",
  },
  {
    url: "/assets/img/tk4.jpg",
    title: "Tahfidz Sehari-hari",
    description: "Menghafal Al-Qur'an sejak dini.",
  },
  {
    url: "/assets/img/tk5.jpg",
    title: "Tahfidz Sehari-hari",
    description: "Menghafal Al-Qur'an sejak dini.",
  },
  {
    url: "/assets/img/tk6.jpg",
    title: "Tahfidz Sehari-hari",
    description: "Menghafal Al-Qur'an sejak dini.",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === kindergartenImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? kindergartenImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Image Container */}
        <div className="relative w-full h-full">
          {kindergartenImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-3">{image.title}</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {kindergartenImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
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
      </div>
    </div>
  );
}
