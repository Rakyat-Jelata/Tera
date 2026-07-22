"use client";

import SearchBar from "@/components/home/SearchBar";

export default function PropertyHero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <h1 className="text-4xl font-black text-white md:text-5xl">
            Temukan Properti Impian Anda
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Jelajahi ribuan listing rumah, apartemen, tanah, ruko, villa,
            gudang, dan properti komersial di seluruh Indonesia.
          </p>

        </div>

        <div className="mt-10">
          <SearchBar />
        </div>

      </div>

    </section>
  );
}
