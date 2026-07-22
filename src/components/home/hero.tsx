'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          <span className="mb-6 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
            🇮🇩 Marketplace Properti Seluruh Indonesia
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Temukan Properti
            <span className="block text-cyan-400">
              Impian Anda
            </span>
            Bersama TERAVIA
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Jual, beli, dan sewa rumah, apartemen, tanah, ruko,
            gudang, villa hingga properti komersial dengan mudah,
            cepat, dan terpercaya.
          </p>

          {/* Search Box */}
          <div className="mt-10 rounded-3xl bg-white p-6 shadow-2xl">

            <div className="grid gap-4 md:grid-cols-5">

              <input
                type="text"
                placeholder="Lokasi"
                className="rounded-xl border p-4 outline-none focus:border-cyan-500"
              />

              <select className="rounded-xl border p-4">
                <option>Semua Kategori</option>
                <option>Hunian</option>
                <option>Komersial</option>
                <option>Tanah</option>
                <option>Apartemen</option>
              </select>

              <select className="rounded-xl border p-4">
                <option>Tipe Properti</option>
                <option>Rumah</option>
                <option>Ruko</option>
                <option>Villa</option>
                <option>Gudang</option>
              </select>

              <select className="rounded-xl border p-4">
                <option>Harga</option>
                <option>< Rp500 Juta</option>
                <option>Rp500 Jt - Rp1 M</option>
                <option>Rp1 M - Rp5 M</option>
                <option>> Rp5 M</option>
              </select>

              <button className="rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700">
                Cari Properti
              </button>

            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/properties"
              className="rounded-xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
            >
              Jelajahi Properti
            </Link>

            <Link
              href="/pasang-iklan"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Pasang Iklan
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h2 className="text-3xl font-bold text-white">25K+</h2>
              <p className="text-gray-300">Listing</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">2.500+</h2>
              <p className="text-gray-300">Agen</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">514</h2>
              <p className="text-gray-300">Kab/Kota</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">1,2 Juta</h2>
              <p className="text-gray-300">Pengunjung</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
      }
