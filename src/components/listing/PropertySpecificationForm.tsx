"use client";

interface PropertySpecificationFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function PropertySpecificationForm({
  formData,
  updateFormData,
  onNext,
  onBack,
}: PropertySpecificationFormProps) {
  
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Spesifikasi Properti
        </h2>

        <p className="mt-2 text-slate-500">
          Lengkapi spesifikasi fisik dan legalitas properti.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Luas Tanah (m²)
          </label>

          <input
  type="number"
  value={formData.landArea}
  onChange={(e) =>
    updateFormData("landArea", e.target.value)
  }
  placeholder="120"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Luas Bangunan (m²)
          </label>

          <input
  type="number"
  value={formData.buildingArea}
  onChange={(e) =>
    updateFormData("buildingArea", e.target.value)
  }
  placeholder="90"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Kamar Tidur
          </label>

          <input
  type="number"
  value={formData.bedroom}
  onChange={(e) =>
    updateFormData("bedroom", e.target.value)
  }
  placeholder="3"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Kamar Mandi
          </label>

          <input
  type="number"
  value={formData.bathroom}
  onChange={(e) =>
    updateFormData("bathroom", e.target.value)
  }
  placeholder="2"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Jumlah Lantai
          </label>

          <input
  type="number"
  value={formData.floor}
  onChange={(e) =>
    updateFormData("floor", e.target.value)
  }
  placeholder="2"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
/>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Tahun Dibangun
          </label>

          <input
            type="number"
            placeholder="2022"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Legalitas
          </label>

          <select
  value={formData.legal}
  onChange={(e) =>
    updateFormData("legal", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4 text-slate-700"
>
  <option value="">Pilih Legalitas</option>
  <option value="SHM">SHM</option>
  <option value="SHGB">SHGB</option>
  <option value="AJB">AJB</option>
  <option value="Girik">Girik</option>
  <option value="Letter C">Letter C</option>
  <option value="HGU">HGU</option>
  <option value="Hak Pakai">Hak Pakai</option>
  <option value="Lainnya">Lainnya</option>
</select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Kondisi Bangunan
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">

            <option>Baru</option>
            <option>Bekas</option>
            <option>Renovasi</option>

          </select>
        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          ← Kembali
        </button>

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

      </div>

    </section>
  );
}
