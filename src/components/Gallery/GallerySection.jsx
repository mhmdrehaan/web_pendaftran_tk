// src/components/Gallery.jsx
import React from "react";

export default function Gallery({ currentSection }) {
  if (currentSection !== "gallery") return null;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📷 Galeri Kegiatan
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Momen-momen berharga dalam perjalanan pendidikan anak-anak di TKIT
            Ar-Rahman
          </p>
        </div>

        {/* Gallery Grid contoh */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "/images/gallery1.jpg",
            "/images/gallery2.jpg",
            "/images/gallery3.jpg",
            "/images/gallery4.jpg",
            "/images/gallery5.jpg",
            "/images/gallery6.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Galeri ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
