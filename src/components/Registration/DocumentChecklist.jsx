import { CheckCircle, AlertCircle } from "lucide-react";

export default function DocumentChecklist() {
  const documents = [
    { doc: "Usia minimal 4 tahun pada 1 Juli 2025", icon: "🎂", required: true },
    { doc: "Fotokopi Akta Kelahiran (2 lembar)", icon: "📄", required: true },
    { doc: "Fotokopi Kartu Keluarga (2 lembar)", icon: "👨‍👩‍👧‍👦", required: true },
    { doc: "Pas foto anak 3x4 (4 lembar)", icon: "📷", required: true },
    { doc: "Fotokopi KTP orangtua (2 lembar)", icon: "🆔", required: true },
    { doc: "Surat keterangan sehat dari dokter", icon: "🏥", required: false }
  ];

  const note = "Dokumen asli wajib dibawa saat verifikasi dan wawancara di sekolah. Pastikan semua fotokopi jelas dan mudah dibaca.";

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        📋 Dokumen Diperlukan
      </h3>

      {/* Checklist */}
      <div className="space-y-4">
        {documents.map((item, index) => (
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

      {/* Note */}
      <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
          <div>
            <div className="font-bold text-amber-800 mb-2">⚠️ Penting!</div>
            <div className="text-sm text-amber-700 leading-relaxed">
              {note}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
