"use client";

import Link from "next/link";

export default function PaymentFailedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">
          ❌
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Pembayaran Gagal
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Maaf, pembayaran Anda belum berhasil diproses.
          Silakan coba kembali atau gunakan metode pembayaran lain.
        </p>

        <Link
          href="/membership"
          className="mt-10 block rounded-2xl bg-cyan-600 py-4 text-lg font-bold text-white transition hover:bg-cyan-700"
        >
          Coba Lagi
        </Link>

        <Link
          href="/dashboard"
          className="mt-4 block text-cyan-600"
        >
          Kembali ke Dashboard
        </Link>

      </div>

    </main>
  );
}
