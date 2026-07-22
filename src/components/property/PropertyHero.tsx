"use client";

import SearchBar from "@/components/home/SearchBar";

export default function PropertyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 py-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_45%)]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            🇮🇩 Marketplace Properti Indonesia
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Temukan Properti Impian Anda
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Jual, beli, dan sewa rumah, apartemen, tanah, villa, ruko, gudang,
            hingga properti komersial di seluruh Indonesia dengan pengalaman
            pencarian yang cepat dan modern.
          </p>

        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <SearchBar />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">

          <div>
            <h3 className="text-3xl font-black text-cyan-400">
              25K+
            </h3>
            <p className="text-sm text-slate-300">
              Listing Aktif
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-cyan-400">
              2.500+
            </h3>
            <p className="text-sm text-slate-300">
              Agen Terverifikasi
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-cyan-400">
              514
            </h3>
            <p className="text-sm text-slate-300">
              Kabupaten / Kota
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-cyan-400">
              38
            </h3>
            <p className="text-sm text-slate-300">
              Provinsi
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
