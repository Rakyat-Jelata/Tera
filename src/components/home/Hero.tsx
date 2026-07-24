"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import SearchBar from "./SearchBar";

export default function Hero() {

  const [user, setUser] = useState<any>(null);


  useEffect(() => {

    supabase.auth.getUser()
      .then(({ data }) => {
        setUser(data.user);
      });


    const {
      data: listener
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setUser(session?.user ?? null);

      }
    );


    return () => {

      listener.subscription.unsubscribe();

    };


  }, []);



  return (

    <section className="relative overflow-hidden bg-slate-950">


      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/hero-bg.png"
          alt="TERAVIA"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

      </div>



      {/* Navbar */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">


          <Link
            href="/"
            className="flex items-center"
          >

            <Image
              src="/images/logo.png"
              alt="TERAVIA"
              width={160}
              height={44}
              priority
            />

          </Link>



          <nav className="flex items-center gap-10 font-medium text-slate-700">

            <Link href="/">
              Beranda
            </Link>

            <Link href="/property">
              Properti
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/membership">
              Membership
            </Link>

            <Link href="/about">
              Tentang
            </Link>

          </nav>




          <div className="flex items-center gap-4">


            {
              user ? (

                <Link
                  href="/dashboard"
                  className="rounded-xl bg-cyan-600 px-5 py-2 font-semibold text-white hover:bg-cyan-700"
                >
                  Profil Saya
                </Link>

              ) : (

                <>

                  <Link
                    href="/login"
                    className="rounded-xl border border-slate-300 px-5 py-2 font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Masuk
                  </Link>


                  <Link
                    href="/register"
                    className="rounded-xl bg-cyan-600 px-5 py-2 font-semibold text-white hover:bg-cyan-700"
                  >
                    Daftar Gratis
                  </Link>

                </>

              )

            }


          </div>


        </div>

      </header>





      {/* Hero Content */}

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





          <div className="mt-8">

            <Image
              src="/images/logo-ai-ads.png"
              alt="AI Ads"
              width={260}
              height={70}
            />

          </div>





          <div className="mt-10">

            <SearchBar />

          </div>





          <div className="mt-8 flex flex-wrap gap-4">


            <Link
              href="/pasang-iklan"
              className="rounded-xl bg-cyan-600 px-7 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              Pasang Properti Sekarang
            </Link>



            <Link
              href="/property"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white/10"
            >
              Cari Properti
            </Link>


          </div>





          <div className="mt-12 flex flex-wrap gap-10">


            <div>
              <h3 className="text-3xl font-black text-white">
                34+
              </h3>
              <p className="text-slate-400">
                Provinsi Terhubung
              </p>
            </div>



            <div>
              <h3 className="text-3xl font-black text-white">
                500+
              </h3>
              <p className="text-slate-400">
                Listing Properti
              </p>
            </div>



            <div>
              <h3 className="text-3xl font-black text-white">
                100+
              </h3>
              <p className="text-slate-400">
                Member Profesional
              </p>
            </div>


          </div>




          <div className="mt-10 max-w-xl">

            <p className="leading-7 text-slate-400">

              TERAVIA membantu pemilik properti,
              agen, broker, dan pencari properti
              menemukan peluang terbaik di seluruh Indonesia.

            </p>

          </div>



        </div>


      </div>


    </section>

  );

            }
