"use client";

export default function PropertyFilter() {
  return (
    <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">
          🔎 Filter Properti
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Temukan properti sesuai kebutuhan Anda.
        </p>
      </div>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Transaksi
          </label>

          <select className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500">
            <option>Semua</option>
            <option>Jual</option>
            <option>Sewa</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Tipe Properti
          </label>

          <select className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500">
            <option>Semua</option>
            <option>Rumah</option>
            <option>Apartemen</option>
            <option>Villa</option>
            <option>Tanah</option>
            <option>Ruko</option>
            <option>Gudang</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Provinsi
          </label>

          <input
            type="text"
            placeholder="Pilih Provinsi"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Kabupaten / Kota
          </label>

          <input
            type="text"
            placeholder="Pilih Kabupaten / Kota"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Harga Maksimal
          </label>

          <input
            type="number"
            placeholder="Rp"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Luas Tanah Minimum (m²)
          </label>

          <input
            type="number"
            placeholder="Contoh: 120"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Kamar Tidur
          </label>

          <select className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-cyan-500">
            <option>Bebas</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>

      </div>

      <div className="mt-8 space-y-3">

        <button className="w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700">
          Terapkan Filter
        </button>

        <button className="w-full rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
          Reset Filter
        </button>

      </div>

    </div>
  );
}
