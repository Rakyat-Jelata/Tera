"use client";

interface PropertyPublishProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
}

export default function PropertyPublish({
  formData,
  updateFormData,
  onBack,
}: PropertyPublishProps) {
  
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
          🚀
        </div>

        <h2 className="mt-6 text-3xl font-black text-slate-900">
          Siap Dipublikasikan
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Semua data properti telah berhasil dilengkapi.
          Periksa kembali jika diperlukan, kemudian klik tombol
          <strong> Publish Listing</strong> untuk menerbitkan iklan Anda di TERAVIA.
        </p>

      </div>

      <div className="mt-10 rounded-3xl border border-cyan-200 bg-cyan-50 p-8">

        <h3 className="text-xl font-bold text-cyan-700">
          ✔ Checklist
        </h3>

        <div className="mt-5 space-y-3">

          <div>✅ Informasi Properti</div>
          <div>✅ Lokasi Properti</div>
          <div>✅ Spesifikasi</div>
          <div>✅ Fasilitas</div>
          <div>✅ Harga & Legalitas</div>
          <div>✅ Upload Foto</div>
          <div>✅ Video / Virtual Tour</div>
          <div>✅ SEO Listing</div>
          <div>✅ AI Description</div>
          <div>✅ Preview Listing</div>

        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          ← Kembali
        </button>

        <button
          className="rounded-2xl bg-green-600 px-10 py-4 font-bold text-white transition hover:bg-green-700"
        >
          🚀 Publish Listing
        </button>

      </div>

    </section>
  );
}
