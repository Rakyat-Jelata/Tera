"use client";

interface PropertyLocationFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function PropertyLocationForm({
  formData,
  updateFormData,
  onNext,
  onBack,
}: PropertyLocationFormProps) {
  
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Lokasi Properti
        </h2>

        <p className="mt-2 text-slate-500">
          Tentukan lokasi properti secara lengkap.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Provinsi */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Provinsi
          </label>

          <select
  value={formData.province}
  onChange={(e) =>
    updateFormData("province", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>
  <option value="">Pilih Provinsi</option>
</select>
        </div>

        {/* Kabupaten */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kabupaten / Kota
          </label>

          <select
  value={formData.city}
  onChange={(e) =>
    updateFormData("city", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>
  <option value="">Pilih Kabupaten / Kota</option>
</select>

        </div>

        {/* Kecamatan */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kecamatan
          </label>

          <select
  value={formData.district}
  onChange={(e) =>
    updateFormData("district", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>
  <option value="">Pilih Kecamatan</option>
</select>

        </div>

        {/* Kelurahan */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kelurahan / Desa
          </label>

          <select
  value={formData.village}
  onChange={(e) =>
    updateFormData("village", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>
  <option value="">Pilih Kelurahan / Desa</option>
</select>

        </div>

        {/* Alamat */}
        <div className="md:col-span-2">

          <label className="mb-2 block font-semibold text-slate-700">
            Alamat Lengkap
          </label>

          <textarea
  rows={5}
  value={formData.address}
  onChange={(e) =>
    updateFormData("address", e.target.value)
  }
  placeholder="Masukkan alamat lengkap..."
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
/>

        </div>

        {/* Kode Pos */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kode Pos
          </label>

          <input
            type="text"
            placeholder="Contoh: 16111"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        {/* Titik Koordinat */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Google Maps
          </label>

          <input
            type="text"
            placeholder="Tempel link Google Maps (Opsional)"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

      </div>

      <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 p-10 text-center">

        <div className="text-5xl">
          🗺️
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-800">
          Preview Lokasi
        </h3>

        <p className="mt-2 text-slate-500">
          Google Maps / OpenStreetMap akan tampil di sini setelah integrasi API.
        </p>

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
