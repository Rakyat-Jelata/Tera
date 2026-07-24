"use client";

import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-10">

          <h1 className="text-4xl font-black text-slate-900">
            Riwayat Pembayaran
          </h1>

          <p className="mt-3 text-slate-600">
            Seluruh transaksi membership TERAVIA Anda akan muncul di halaman ini.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <table className="w-full">

            <thead className="bg-slate-900 text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Order ID
                </th>

                <th className="px-6 py-4 text-left">
                  Membership
                </th>

                <th className="px-6 py-4 text-left">
                  Nominal
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-left">
                  Tanggal
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td
                  colSpan={5}
                  className="py-20 text-center text-slate-500"
                >
                  Belum ada transaksi.
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <div className="mt-10">

          <Link
            href="/membership"
            className="rounded-2xl bg-cyan-600 px-8 py-4 font-bold text-white hover:bg-cyan-700"
          >
            Upgrade Membership
          </Link>

        </div>

      </div>

    </main>
  );
}
