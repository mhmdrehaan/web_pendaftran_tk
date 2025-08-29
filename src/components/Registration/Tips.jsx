// src/components/TipsForm.jsx
import React from "react";
import { Lightbulb } from "lucide-react";

export default function Tips() {
  const tips = [
    "Isi nama lengkap anak sesuai akta/identitas resmi.",
    "Gunakan format tanggal lahir yang benar (contoh: 2019-05-21).",
    "Pilih jenis kelamin dengan tepat sesuai data anak.",
    "Tuliskan nama orangtua/wali yang bisa dihubungi.",
    "Nomor telepon gunakan format 08xx-xxxx-xxxx agar valid.",
    "Email opsional, tapi disarankan agar bisa menerima info resmi.",
    "Pilih program sesuai kebutuhan (Reguler atau Full Day).",
    "Alamat ditulis lengkap: jalan, RT/RW, kelurahan, kecamatan, kota/kabupaten.",
  ];

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="text-yellow-500" />
        <h3 className="text-lg font-bold text-yellow-700">Tips Pengisian Form</h3>
      </div>
      <ul className="list-disc list-inside space-y-2 text-sm text-yellow-800">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
