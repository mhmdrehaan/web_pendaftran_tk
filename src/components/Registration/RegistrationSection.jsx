import { 
  FileText, 
  Send, 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  Users, 
  ChevronRight, 
  Calendar, 
  Phone, 
  Mail 
} from "lucide-react";

function RegistrationSection({ currentSection, submitStatus, isSubmitting, formData, handleInputChange, handleSubmit }) {
  return (
    <>
      {currentSection === 'registration' && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                📝 Pendaftaran Siswa Baru 2025
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
                Bergabunglah dengan keluarga besar TKIT Ar-Rahman untuk masa depan anak yang 
                <span className="font-bold text-emerald-600"> gemilang dan berakhlak mulia</span>
              </p>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* FORM */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-200">
                  
                  {/* Judul Form */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Form Pendaftaran</h3>
                      <p className="text-gray-600">Silakan lengkapi data di bawah ini dengan benar</p>
                    </div>
                  </div>

                  {/* (isi form & status messages tetap sama seperti punya Anda) */}

                  {/* Example perbaikan Document Checklist */}
                  <div className="space-y-4">
                    {[
                      { doc: "Usia minimal 4 tahun pada 1 Juli 2025", icon: "🎂", required: true },
                      { doc: "Fotokopi Akta Kelahiran (2 lembar)", icon: "📄", required: true },
                      { doc: "Fotokopi Kartu Keluarga (2 lembar)", icon: "👨‍👩‍👧‍👦", required: true },
                      { doc: "Pas foto anak 3x4 (4 lembar)", icon: "📷", required: true },
                      { doc: "Fotokopi KTP orangtua (2 lembar)", icon: "🆔", required: true },
                      { doc: "Surat keterangan sehat dari dokter", icon: "🏥", required: false }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                          item.required 
                            ? 'bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 hover:border-red-300' 
                            : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 ${item.required ? 'text-red-700' : 'text-blue-700'}`}>
                            <span className="font-medium">{item.doc}</span>
                            {item.required && <span className="text-red-500 font-bold">*</span>}
                          </div>
                          {!item.required && <span className="text-blue-500 text-sm">(opsional)</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* SIDEBAR */}
              {/* (isi sidebar tetap sama, hanya tambahan import icon yang tadi kurang) */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default RegistrationSection;
