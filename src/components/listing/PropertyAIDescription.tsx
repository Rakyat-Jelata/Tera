"use client";

interface PropertyAIDescriptionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyAIDescription({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyAIDescriptionProps) {

  const generateDescription = () => {

    const description = `
${formData.title}

Kategori : ${formData.category}
Tipe Properti : ${formData.propertyType}
Jenis Transaksi : ${formData.transaction}

📍 Lokasi
${formData.address}

Spesifikasi Properti
• Luas Tanah : ${formData.landArea} m²
• Luas Bangunan : ${formData.buildingArea} m²
• Kamar Tidur : ${formData.bedroom}
• Kamar Mandi : ${formData.bathroom}
• Legalitas : ${formData.legal}

Harga
Rp ${formData.price}

${formData.shortDescription}

Properti ini sangat cocok bagi Anda yang sedang mencari hunian nyaman maupun investasi yang menjanjikan. Memiliki lokasi strategis, akses mudah, lingkungan yang nyaman serta nilai investasi yang terus berkembang.

Segera hubungi kami sekarang juga untuk mendapatkan informasi lengkap maupun menjadwalkan survey lokasi.
`;

    updateFormData("aiDescription", description.trim());
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          AI Description
        </h2>

        <p className="mt-2 text-slate-600">
          Generate deskripsi iklan secara otomatis berdasarkan data yang telah Anda isi.
        </p>

      </div>

      <button
        type="button"
        onClick={generateDescription}
        className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
      >
        🤖 Generate Deskripsi AI
      </button>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-900">
          Hasil Deskripsi
        </label>

        <textarea
          rows={14}
          value={formData.aiDescription}
          onChange={(e) =>
            updateFormData("aiDescription", e.target.value)
          }
          placeholder="Klik tombol Generate Deskripsi AI..."
          className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
        />

      </div>

      <div className="mt-8 rounded-2xl bg-violet-50 p-6">

        <h4 className="font-bold text-slate-900">
          💡 Tips
        </h4>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Isi seluruh data properti terlebih dahulu.</li>
          <li>Semakin lengkap data, semakin baik hasil deskripsi.</li>
          <li>Deskripsi masih bisa diedit sebelum dipublikasikan.</li>
        </ul>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          ← Kembali
        </button>

        <button
          onClick={onNext}
          className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Simpan & Lanjut →
        </button>

      </div>

    </section>
  );
}
