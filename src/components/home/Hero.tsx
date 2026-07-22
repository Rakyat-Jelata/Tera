"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
          alt="TERAVIA"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      </div>

      {/* Navbar */}

      <header className="relative z-30">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/images/logo-teravia.svg"
              alt="TERAVIA"
              width={180}
              height={45}
              priority
            />

          </Link>

          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-white transition hover:text-cyan-400"
            >
              Beranda
            </Link>

            <Link
              href="/property"
              className="text-white transition hover:text-cyan-400"
            >
              Properti
            </Link>

            <Link
              href="/blog"
              className="text-white transition hover:text-cyan-400"
            >
              Blog
            </Link>

            <Link
              href="/membership"
              className="text-white transition hover:text-cyan-400"
            >
              Membership
            </Link>

            <Link
              href="/about"
              className="text-white transition hover:text-cyan-400"
            >
              Tentang
            </Link>

          </nav>

          <div className="hidden items-center gap-3 lg:flex">

            <Link
              href="/login"
              className="rounded-xl border border-white/20 px-5 py-2 font-medium text-white transition hover:bg-white/10"
            >
              Masuk
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-cyan-600 px-5 py-2 font-semibold text-white transition hover:bg-cyan-700"
            >
              Daftar Gratis
            </Link>

          </div>

        </div>

      </header>

      {/* Hero */}

      <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">
            🇮🇩 Marketplace Properti Seluruh Indonesia
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Marketplace Properti

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Berbasis AI & Ads
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">

            Platform modern untuk jual,
            beli dan sewa properti di seluruh Indonesia
            dengan dukungan Artificial Intelligence,
            Smart Ads dan teknologi pencarian pintar.

          </p>

          {/* AI & ADS */}

          <div className="mt-8">

            <Image
              src="/images/logo-ai-ads.svg"
              alt="AI & Ads"
              width={260}
              height={70}
              priority
            />

          </div>

          {/* Search */}

          <div className="mt-10">

            <SearchBar />

          </div>

          {/* CTA SECTION */}
<div className="hero-actions">

  <a 
    href="/pages/pasang-iklan.html" 
    className="btn btn-primary"
  >
    Pasang Properti Sekarang
  </a>

  <a 
    href="/pages/property.html" 
    className="btn btn-outline"
  >
    Cari Properti
  </a>

</div>


{/* STATISTIC SECTION */}
<div className="hero-statistics">

  <div className="stat-item">
    <h3>34+</h3>
    <p>Provinsi Terhubung</p>
  </div>

  <div className="stat-item">
    <h3>500+</h3>
    <p>Listing Properti</p>
  </div>

  <div className="stat-item">
    <h3>100+</h3>
    <p>Member Profesional</p>
  </div>

</div>


{/* HERO CLOSING */}
<div className="hero-footer">

  <p>
    TERAVIA membantu pemilik properti, agen, broker,
    dan pencari properti menemukan peluang terbaik
    di seluruh Indonesia.
  </p>

</div>
