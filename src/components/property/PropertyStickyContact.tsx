"use client";

export default function PropertyStickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur lg:hidden">

      <div className="mx-auto flex max-w-md gap-3">

        <button
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-2xl transition hover:bg-red-100"
        >
          ❤️
        </button>

        <button
          className="flex-1 rounded-2xl border border-cyan-300 bg-cyan-50 font-semibold text-cyan-700 transition hover:bg-cyan-100"
        >
          📞 Telepon
        </button>

        <button
          className="flex-1 rounded-2xl bg-green-600 font-semibold text-white transition hover:bg-green-700"
        >
          💬 WhatsApp
        </button>

      </div>

    </div>
  );
}
