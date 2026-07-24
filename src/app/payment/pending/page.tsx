"use client";

import Link from "next/link";

export default function PaymentPendingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
          ⏳
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Menunggu Pembayaran
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Pesanan Membership TERAVIA Anda telah dibuat.
          Silakan selesaikan pembayaran melalui metode yang dipilih
          (QRIS, Virtual Account, E-Wallet, atau Kartu Kredit).
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">

          <h2 className="font-bold text-slate-900">
            Status
          </h2>

          <p className="mt-2 text-slate-700">
            🟡 Menunggu pembayaran dari Midtrans.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Setelah pembayaran berhasil diverifikasi,
            membership akan aktif secara otomatis tanpa perlu
            menghubungi admin.
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <Link
            href="/membership"
            className="block rounded-2xl bg-cyan-600 py-4 text-lg font-bold text-white transition hover:bg-cyan-700"
          >
            Cek Status Pembayaran
          </Link>

          <Link
            href="/dashboard"
            className="block text-cyan-600"
          >
            Kembali ke Dashboard
          </Link>

        </div>

      </div>

    </main>
  );
}
