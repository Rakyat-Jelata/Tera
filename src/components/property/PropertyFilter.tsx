"use client";

export default function PropertyFilter() {
  return (
    <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Filter Properti
      </h2>

      {/* Transaksi */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Transaksi
        </label>

        <select className="w-full rounded-xl border p-3">
          <option>Semua</option>
          <option>Jual</option>
          <option>Sewa</option>
        </select>
      </div>

      {/* Tipe */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Tipe Properti
        </label>

        <select className="w-full rounded-xl border p-3">
          <option>Semua</option>
          <option>Rumah</option>
          <option>Apartemen</option>
          <option>Villa</option>
          <option>Tanah</option>
          <option>Ruko</option>
          <option>Gudang</option>
        </select>
      </div>

      {/* Provinsi */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Provinsi
        </label>

        <input
          type="text"
          placeholder="Pilih Provinsi"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Kabupaten */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Kabupaten / Kota
        </label>

        <input
          type="text"
          placeholder="Pilih Kabupaten"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Harga */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Harga Maksimal
        </label>

        <input
          type="number"
          placeholder="Rp"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Luas Tanah */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Luas Tanah Minimum (m²)
        </label>

        <input
          type="number"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Kamar */}
      <div className="mb-6">
        <label className="mb-2 block font-semibold">
          Kamar Tidur
        </label>

        <select className="w-full rounded-xl border p-3">
          <option>Bebas</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
          <option>5+</option>
        </select>
      </div>

      {/* Tombol */}
      <button className="w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700">
        Terapkan Filter
      </button>

      <button className="mt-3 w-full rounded-xl border py-3 font-semibold">
        Reset Filter
      </button>

    </div>
  );
}
