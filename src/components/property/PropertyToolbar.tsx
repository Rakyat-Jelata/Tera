"use client";

type PropertyToolbarProps = {
  total: number;
};

export default function PropertyToolbar({
  total,
}: PropertyToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

      {/* Total Listing */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {total} Properti Ditemukan
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Menampilkan hasil pencarian terbaik TERAVIA.
        </p>
      </div>

      {/* Action */}
      <div className="flex flex-wrap items-center gap-3">

        <select className="rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none focus:border-cyan-500">

          <option>Urutkan : Terbaru</option>
          <option>Harga Terendah</option>
          <option>Harga Tertinggi</option>
          <option>Luas Terbesar</option>
          <option>Paling Populer</option>

        </select>

        <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
          ⬜ Grid
        </button>

        <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
          ☰ List
        </button>

      </div>

    </div>
  );
}
