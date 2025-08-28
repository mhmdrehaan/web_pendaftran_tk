// src/components/Gallery.jsx
import React from "react";
import { Camera } from "lucide-react";

const kindergartenImages = [
  {
    url: "/images/gallery1.jpg",
    title: "Kegiatan Belajar",
    description: "Anak-anak belajar dengan suasana ceria",
  },
  {
    url: "/images/gallery2.jpg",
    title: "Outbond",
    description: "Melatih kemandirian di alam terbuka",
  },
  {
    url: "/images/gallery3.jpg",
    title: "Kegiatan Seni",
    description: "Mengasah kreativitas melalui seni & kerajinan",
  },
  // tambahkan data sesuai kebutuhan
];

export default function Gallery() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📷 Galeri Kegiatan
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Momen-momen berharga dalam perjalanan pendidikan anak-anak di TKIT
            Ar-Rahman
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {kindergartenImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Title & description */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>

                {/* Camera icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
