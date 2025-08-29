import React from "react";
import { BookOpen, Clock, Heart, Mail, MapPin, Phone } from "lucide-react";


const Footer = () => {
  return (
    <>
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Enhanced Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">TKIT Ar-Rahman</h3>
                  <p className="text-emerald-100">
                    Perum Graha Prima, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830
                  </p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed mb-6 text-lg">
                Taman Kanak-Kanak Islam Terpadu yang mengembangkan potensi anak dengan pendidikan berkualitas 
                tinggi dan penanaman nilai-nilai islami yang kuat untuk masa depan gemilang.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                  <span className="text-xl">📱</span>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                  <span className="text-xl">📧</span>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
                  <span className="text-xl">🌐</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-emerald-100">Alamat:</div>
                    <span className="text-sm text-emerald-100">
                      Jl. Gruda No. 17<br />
                      Perum Graha Prima, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830 28684
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-200" />
                  <div>
                    <div className="font-semibold text-emerald-100">Telepon:</div>
                    <span className="text-sm text-emerald-100">085810111004</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-200" />
                  <div>
                    <div className="font-semibold text-emerald-100">Email:</div>
                    <span className="text-sm text-emerald-100">tarraahman00@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Jam Operasional
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-md rounded-xl">
                  <span className="font-medium">Senin - Jumat</span>
                  <span className="text-emerald-200">07.00 - 16.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-md rounded-xl">
                  <span className="font-medium">Sabtu</span>
                  <span className="text-emerald-200">07.00 - 12.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-md rounded-xl">
                  <span className="font-medium">Minggu</span>
                  <span className="text-red-200">Libur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-emerald-100">
                © 2025 TKIT Ar-Rahman Bida. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-emerald-100">
                <Heart className="w-4 h-4 text-red-300" />
                <span>Made with love for education</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl">
              <p className="text-sm text-emerald-100">
                🌟 <strong>Visi Kami:</strong> Mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan siap menghadapi masa depan
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
      </footer>
    </>
  );
};

export default Footer;
