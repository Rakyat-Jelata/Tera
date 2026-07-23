"use client";

interface PropertyPricingFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyPricingForm({
  formData,
  updateFormData,
  onBack,
  onNext,
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
  value={formData.price}
  onChange={(e) =>
    updateFormData("price", e.target.value)
  }
  placeholder="850000000"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Harga per m²
          </label>

          <input
  type="number"
  value={formData.pricePerMeter}
  onChange={(e) =>
    updateFormData("pricePerMeter", e.target.value)
  }
  placeholder="7500000"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Nego
          </label>

          <input
  type="checkbox"
  checked={formData.negotiable}
  onChange={(e) =>
    updateFormData("negotiable", e.target.checked)
  }
/>
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
