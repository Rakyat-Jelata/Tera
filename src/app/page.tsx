import Link from "next/link";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import LatestProperties from "@/components/home/LatestProperties";
import Stats from "@/components/home/Stats";
import WhyTeravia from "@/components/home/WhyTeravia";
import AISection from "@/components/home/AISection";
import Membership from "@/components/home/Membership";
import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TERA
            </span>

            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
              PropTech
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link href="#features">Fitur</Link>
            <Link href="#listings">Properti</Link>
            <Link href="#about">Tentang Kami</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">Masuk</Link>

            <Link href="/register">
              Daftar Gratis
            </Link>
          </div>

        </div>
      </header>

      <main className="flex-1">

  <Hero />

  <Categories />

  <FeaturedProperties />

  <LatestProperties />

  <Stats />

  <WhyTeravia />

  <AISection />

  <Membership />

  <BlogSection />

  <CTA />

</main>

      <Footer />

    </div>
  );
}
