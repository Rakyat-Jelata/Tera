export default function PropertyAgentCard() {
  return (
    <aside className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100 text-4xl">
          👨
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          Budi Santoso
        </h2>

        <p className="mt-1 text-slate-500">
          BrokerID #TRA001
        </p>

        <span className="mt-3 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          ✓ Agen Terverifikasi
        </span>

      </div>

      <div className="mt-8 space-y-3">

        <button className="w-full rounded-2xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700">
          💬 WhatsApp
        </button>

        <button className="w-full rounded-2xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700">
          📞 Telepon
        </button>

        <button className="w-full rounded-2xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100">
          ✉️ Email
        </button>

      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">

        <div className="flex justify-between py-2">
          <span className="text-slate-500">
            Listing Aktif
          </span>

          <span className="font-semibold text-slate-900">
            128
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-500">
            Bergabung
          </span>

          <span className="font-semibold text-slate-900">
            Jan 2025
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-slate-500">
            Rating
          </span>

          <span className="font-semibold text-amber-500">
            ⭐ 4.9
          </span>
        </div>

      </div>

    </aside>
  );
}
