interface PropertyToolbarProps {
  total: number;
}

export default function PropertyToolbar({
  total,
}: PropertyToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

      <div>

        <h2 className="text-xl font-bold text-slate-900">
          {total} Properti Ditemukan
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Menampilkan 1–{total} dari {total} listing
        </p>

      </div>

      <div className="flex flex-wrap items-center gap-3">

        <select
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-500"
        >
          <option>Terbaru</option>
          <option>Harga Terendah</option>
          <option>Harga Tertinggi</option>
          <option>Luas Tanah</option>
          <option>Luas Bangunan</option>
        </select>

        <button
          className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"
          title="Grid View"
        >
          ⊞
        </button>

        <button
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100"
          title="List View"
        >
          ☰
        </button>

      </div>

    </div>
  );
}
