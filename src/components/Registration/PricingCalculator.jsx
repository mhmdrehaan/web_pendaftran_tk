
import { Phone, Mail } from "lucide-react";

export default function PricingCalculator() {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">💰</span>
        </div>
        Rincian Biaya Pendidikan
      </h3>

      <div className="space-y-8">
        {/* Program Comparison */}
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border-2 border-emerald-200 rounded-2xl bg-emerald-50 hover:border-emerald-400 transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-emerald-700 text-lg">Program Reguler</div>
                <div className="text-sm text-emerald-600">07.30-11.30 WIB</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-2xl text-emerald-800">350K</div>
                <div className="text-xs text-gray-500">/bulan</div>
              </div>
            </div>
          </div>

          <div className="p-4 border-2 border-blue-200 rounded-2xl bg-blue-50 hover:border-blue-400 transition-all cursor-pointer relative">
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              POPULER
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-blue-700 text-lg">Program Full Day</div>
                <div className="text-sm text-blue-600">07.30-15.30 WIB</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-2xl text-blue-800">450K</div>
                <div className="text-xs text-gray-500">/bulan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-6 text-lg">💳 Rincian Biaya (Gelombang I):</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">💎 Uang Pangkal</span>
              <div className="text-right">
                <span className="text-gray-400 line-through text-sm">Rp 4.500.000</span>
                <div className="font-bold text-xl text-emerald-600">Rp 4.000.000</div>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">📚 SPP Reguler/bulan</span>
              <span className="font-bold text-lg text-gray-800">Rp 350.000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">👕 Seragam & Perlengkapan</span>
              <span className="font-bold text-lg text-gray-800">Rp 800.000</span>
            </div>
            <div className="flex justify-between items-center py-4 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl px-6 border-2 border-emerald-300">
              <span className="font-bold text-xl text-gray-800">🎯 Total Biaya Awal</span>
              <span className="font-bold text-2xl text-emerald-600">Rp 5.150.000</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-300">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🎉</div>
              <div>
                <div className="font-bold text-green-800 text-lg">Hemat Rp 500.000!</div>
                <div className="text-sm text-green-700">Dengan mendaftar di Gelombang I sekarang juga!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4 text-lg">💳 Opsi Pembayaran Fleksibel:</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-green-50 border-2 border-green-200 rounded-2xl hover:border-green-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="text-2xl">💳</div>
                <div>
                  <div className="font-bold text-green-700">Pembayaran Lunas</div>
                  <div className="text-sm text-green-600">Bayar langsung semua biaya</div>
                </div>
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Diskon 5%
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl hover:border-blue-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div>
                  <div className="font-bold text-blue-700">Cicilan 2 Kali</div>
                  <div className="text-sm text-blue-600">50% saat daftar, 50% sebelum masuk</div>
                </div>
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                0% Bunga
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-50 border-2 border-purple-200 rounded-2xl hover:border-purple-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🏦</div>
                <div>
                  <div className="font-bold text-purple-700">Cicilan 3 Kali</div>
                  <div className="text-sm text-purple-600">Daftar, tengah tahun, akhir tahun</div>
                </div>
              </div>
              <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Bunga 2%
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Consultation */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-bold text-orange-800 mb-2">Konsultasi Gratis!</h4>
            <p className="text-orange-700 text-sm mb-4">
              Butuh penjelasan lebih detail? Hubungi kami untuk konsultasi gratis
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-bold">085810111004</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-bold">tarraahman00@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
