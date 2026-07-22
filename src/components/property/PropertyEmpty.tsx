"use client";

import Link from "next/link";

export default function PropertyEmpty() {
  return (
    <div className="rounded-2xl bg-white p-12 text-center shadow-sm">

      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-5xl">
        🏡
      </div>

      <h2 className="text-2xl font-bold text-slate-900">
        Properti Tidak Ditemukan
      </h2>

      <p className="mx-auto mt-4 max-w-md text-slate-500">
        Maaf, belum ada properti yang sesuai dengan filter pencarian Anda.
        Coba ubah filter atau lihat semua listing yang tersedia.
      </p>

      <div className="mt-8 flex justify-center gap-4">

        <Link
          href="/properties"
          className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          Lihat Semua Properti
        </Link>

        <Link
          href="/pasang-iklan"
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Pasang Properti
        </Link>

      </div>

    </div>
  );
}
