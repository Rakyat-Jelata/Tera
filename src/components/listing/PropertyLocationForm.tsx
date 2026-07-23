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
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Lokasi Properti
        </h2>

        <p className="mt-2 text-slate-600">
          Tentukan lokasi properti secara lengkap.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Provinsi */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Provinsi
          </label>

          <select
            value={formData.province}
            onChange={(e) => updateFormData("province", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Provinsi</option>
          </select>
        </div>

        {/* Kabupaten */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Kabupaten / Kota
          </label>

          <select
            value={formData.city}
            onChange={(e) => updateFormData("city", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Kabupaten / Kota</option>
          </select>
        </div>

        {/* Kecamatan */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Kecamatan
          </label>

          <select
            value={formData.district}
            onChange={(e) => updateFormData("district", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Kecamatan</option>
          </select>
        </div>

        {/* Kelurahan */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Kelurahan / Desa
          </label>

          <select
            value={formData.village}
            onChange={(e) => updateFormData("village", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          >
            <option value="">Pilih Kelurahan / Desa</option>
          </select>
        </div>

        {/* Alamat */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold text-slate-900">
            Alamat Lengkap
          </label>

          <textarea
            rows={5}
            value={formData.address}
            onChange={(e) => updateFormData("address", e.target.value)}
            placeholder="Masukkan alamat lengkap..."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Kode Pos */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Kode Pos
          </label>

          <input
            type="text"
            placeholder="Contoh: 16111"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Google Maps */}
        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Google Maps
          </label>

          <input
            type="text"
            placeholder="Tempel link Google Maps (Opsional)"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

      </div>

      <div className="mt-8 rounded-2xl border-2 border-dashed border-cyan-300 bg-cyan-50 p-10 text-center">

        <div className="text-5xl">
          🗺️
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Preview Lokasi
        </h3>

        <p className="mt-2 text-slate-600">
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
