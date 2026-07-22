interface PropertySummaryProps {
  price: string;
}

export default function PropertySummary({
  price,
}: PropertySummaryProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Harga Properti
          </p>

          <h2 className="mt-2 text-4xl font-black text-cyan-600">
            {price}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Harga masih bisa dinegosiasikan.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="rounded-2xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700">
            💬 WhatsApp
          </button>

          <button className="rounded-2xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700">
            📞 Telepon
          </button>

          <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold transition hover:bg-slate-100">
            ❤️ Simpan
          </button>

        </div>

      </div>

    </div>
  );
}
