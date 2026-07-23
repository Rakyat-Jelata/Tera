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
Tipe : ${formData.propertyType}
Transaksi : ${formData.transaction}

Lokasi :
${formData.address}

Luas Tanah : ${formData.landArea} m²
Luas Bangunan : ${formData.buildingArea} m²

Kamar Tidur : ${formData.bedroom}
Kamar Mandi : ${formData.bathroom}

Harga :
Rp ${formData.price}

Properti ini sangat cocok bagi Anda yang mencari hunian maupun investasi dengan lokasi strategis, akses mudah, serta lingkungan yang nyaman.

Hubungi kami sekarang untuk informasi lebih lanjut ataupun jadwal survey lokasi.
`;

    updateFormData("aiDescription", description.trim());

  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          AI Description
        </h2>

        <p className="mt-2 text-slate-500">
          Generate deskripsi iklan otomatis berdasarkan data yang telah Anda isi.
        </p>

      </div>

      <button
        onClick={generateDescription}
        className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
      >
        🤖 Generate Deskripsi AI
      </button>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700">
          Hasil Deskripsi
        </label>

        <textarea
          rows={14}
          value={formData.aiDescription}
          onChange={(e) =>
            updateFormData("aiDescription", e.target.value)
          }
          placeholder="Hasil AI akan muncul di sini..."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-violet-500"
        />

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
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
