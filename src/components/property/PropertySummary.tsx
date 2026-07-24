interface PropertySummaryProps {
  title: string;
  location: string;
  price: string;
  negotiable?: boolean;
}

export default function PropertySummary({
  title,
  location,
  price,
  negotiable = false,
}: PropertySummaryProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Properti Dijual
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900">
            {title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            📍 {location}
          </p>

          <div className="mt-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Harga
            </p>

            <h2 className="mt-2 text-4xl font-black text-cyan-600">
              {price}
            </h2>

            <p className="mt-2 text-slate-500">
              {negotiable
                ? "Harga masih bisa dinegosiasikan."
                : "Harga sesuai yang tercantum pada listing."}
            </p>

          </div>

        </div>

        <div className="flex w-full flex-col gap-3 lg:w-72">

          <button className="rounded-2xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700">
            💬 Chat WhatsApp
          </button>

          <button className="rounded-2xl bg-cyan-600 px-6 py-4 font-bold text-white transition hover:bg-cyan-700">
            📞 Hubungi Penjual
          </button>

          <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
            ❤️ Simpan Favorit
          </button>

          <button className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
            🔗 Bagikan Listing
          </button>

        </div>

      </div>

    </section>
  );
}
