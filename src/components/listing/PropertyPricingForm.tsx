"use client";

interface PropertyPricingFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PropertyPricingForm({
  onNext,
  onBack,
}: PropertyPricingFormProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Harga & Legalitas
        </h2>

        <p className="mt-2 text-slate-500">
          Lengkapi informasi harga, pajak, biaya dan dokumen kepemilikan.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Harga Properti
          </label>

          <input
            type="number"
            placeholder="850000000"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Harga per m²
          </label>

          <input
            type="number"
            placeholder="7083333"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Nego
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">
            <option>Bisa Nego</option>
            <option>Harga Pas</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Status Kepemilikan
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">
            <option>Pemilik Langsung</option>
            <option>Agen Properti</option>
            <option>Developer</option>
            <option>Bank</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            PBB Terakhir
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">
            <option>Sudah Lunas</option>
            <option>Belum Lunas</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            IMB / PBG
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">
            <option>Ada</option>
            <option>Tidak Ada</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-700">
            Catatan Tambahan
          </label>

          <textarea
            rows={5}
            placeholder="Contoh: Harga masih bisa dinegosiasikan, bebas banjir, sertifikat siap balik nama."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />
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
          onClick={onNext}
          className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Simpan & Lanjut →
        </button>

      </div>

    </section>
  );
}
