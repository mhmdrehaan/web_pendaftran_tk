import React, { useState } from "react";
import { FileText, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tanggalLahir: "",
    jenisKelamin: "",
    namaOrtu: "",
    noTelepon: "",
    email: "",
    program: "",
    alamat: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | "email_exists" | "null"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validasi sederhana
    if (!formData.namaLengkap || !formData.tanggalLahir || !formData.jenisKelamin || !formData.namaOrtu || !formData.noTelepon || !formData.program || !formData.alamat) {
      setSubmitStatus("null");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // simulasi request API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // contoh logika dummy untuk status
      if (formData.email === "sudah@ada.com") {
        setSubmitStatus("email_exists");
      } else {
        setSubmitStatus("success");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Enhanced Registration Form */}
      <div className="lg:col-span-2">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Form Pendaftaran</h3>
              <p className="text-gray-600">Silakan lengkapi data di bawah ini dengan benar</p>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-800 mb-2">🎉 Pendaftaran Berhasil!</div>
                  <div className="text-green-700 mb-2">
                    Terima kasih telah mendaftar di TKIT Ar-Rahman. Tim kami akan menghubungi Anda dalam 1x24 jam.
                  </div>
                  <div className="text-sm text-green-600">
                    📞 Jika ada pertanyaan mendesak, hubungi: <span className="font-bold">085810111004</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-red-800 mb-2">❌ Gagal Mengirim Pendaftaran</div>
                  <div className="text-red-700 mb-2">
                    Terjadi kendala teknis. Silakan coba lagi atau hubungi kami langsung.
                  </div>
                  <div className="text-sm text-red-600">
                    📞 Hubungi: <span className="font-bold">085810111004</span> | 📧 Email: <span className="font-bold">tarraahman00@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "email_exists" && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-red-800 mb-2">❌ Sudah Terdaftar Email</div>
                  <div className="text-red-700 mb-2">Email sudah terdaftar, silakan gunakan email lain atau hubungi kami langsung.</div>
                  <div className="text-sm text-red-600">
                    📞 Hubungi: <span className="font-bold">085810111004</span> | 📧 Email: <span className="font-bold">tarraahman00@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "null" && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl text-red-800 mb-2">❌ Data tidak boleh kosong</div>
                  <div className="text-red-700 mb-2">Harap isi semua field wajib sebelum mengirimkan formulir.</div>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">👶 Nama Lengkap Anak *</label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
                  placeholder="Masukkan nama lengkap anak"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">📅 Tanggal Lahir *</label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">👫 Jenis Kelamin *</label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
              >
                <option value="">Pilih jenis kelamin</option>
                <option value="laki-laki">👦 Laki-laki</option>
                <option value="perempuan">👧 Perempuan</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">👨‍👩‍👧‍👦 Nama Orangtua/Wali *</label>
                <input
                  type="text"
                  name="namaOrtu"
                  value={formData.namaOrtu}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
                  placeholder="Nama ayah/ibu/wali"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">📱 No. Telepon/WhatsApp *</label>
                <input
                  type="tel"
                  name="noTelepon"
                  value={formData.noTelepon}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">📧 Alamat Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
                placeholder="email@contoh.com (opsional)"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">🎓 Program yang Dipilih *</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black"
              >
                <option value="">Pilih program pembelajaran</option>
                <option value="reguler">🌅 Program Reguler (07.30 - 11.30) - Rp 350.000/bulan</option>
                <option value="fullday">🌤️ Program Full Day (07.30 - 15.30) - Rp 450.000/bulan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">🏠 Alamat Lengkap *</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                required
                rows="4"
                disabled={isSubmitting}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 text-lg bg-white text-black resize-none"
                placeholder="Masukkan alamat lengkap (jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota)"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 px-8 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Mengirim Pendaftaran...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Kirim Pendaftaran Sekarang
                </>
              )}
            </button>

            <div className="text-center text-sm text-gray-600 mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="mb-2">
                🔒 <strong>Data Anda Aman:</strong> Kami menjaga kerahasiaan informasi pribadi Anda
              </p>
              <p>
                Dengan mendaftar, Anda menyetujui <span className="text-emerald-600 font-bold">Syarat & Ketentuan</span> kami
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
