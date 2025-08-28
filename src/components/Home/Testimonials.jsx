import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    image: "👩‍👧",
    rating: 5,
    text: "Anak saya jadi semangat belajar setiap hari. Guru-gurunya sabar dan penuh kasih sayang.",
    name: "Ibu Aisyah",
    role: "Orangtua Murid",
  },
  {
    image: "👨‍👦",
    rating: 4,
    text: "Lingkungannya islami tapi juga modern. Anak saya berkembang pesat di sini.",
    name: "Bapak Fajar",
    role: "Orangtua Murid",
  },
  {
    image: "👩‍👦",
    rating: 5,
    text: "Fasilitas lengkap, anak saya betah dan selalu ceria pulang sekolah.",
    name: "Ibu Sinta",
    role: "Orangtua Murid",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          💬 Testimoni Orangtua
        </h2>
        <p className="text-xl text-gray-600">
          Apa kata orangtua tentang pengalaman anak-anak mereka di TKIT Ar-Rahman
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center transition-all duration-500">
          <div className="mb-8">
            {/* Avatar / Icon */}
            <div className="text-6xl mb-6">{testimonials[active].image}</div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl text-gray-700 italic leading-relaxed mb-8 max-w-2xl mx-auto">
              "{testimonials[active].text}"
            </p>

            {/* Name & Role */}
            <div>
              <div className="font-bold text-xl text-gray-800">
                {testimonials[active].name}
              </div>
              <div className="text-emerald-600 font-semibold">
                {testimonials[active].role}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === active
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
