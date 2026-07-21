import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* 1. NAVBAR */}
      <header className="border-b border-slate-800/80 backdrop-blur bg-slate-950/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
              TV
            </span>
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
              TERAVIA
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md shadow-indigo-600/30 transition"
            >
              Daftar Agen
            </Link>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center flex-1 flex flex-col items-center justify-center">
        {/* Badge Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Marketplace Property Pertama berbasis AI dan Ads
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight mb-6">
          Jual Properti Lebih Cepat Dengan{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kekuatan AI & AdTech
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Platform marketplace properti pintar terpadu untuk agen profesional. 
          Buat deskripsi pemasaran otomatis dalam hitungan detik dan jangkau calon pembeli potensial secara presisi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition transform active:scale-95"
          >
            Mulai Sebagai Agen
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl transition"
          >
            Masuk ke Dashboard
          </Link>
        </div>

        {/* Visual / Icon Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
          {/* Card 1: AI */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-1">AI Engine Properti</h3>
            <p className="text-sm text-slate-400">Generate deskripsi menarik, analisis harga pasar, dan peningkat kualitas listing otomatis.</p>
          </div>

          {/* Card 2: Property & Ads */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-1">AdTech Network</h3>
            <p className="text-sm text-slate-400">Distribusi iklan properti otomatis ke jaringan Ads untuk impresi maksimal dan leads cepat.</p>
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TERAVIA. All rights reserved.
      </footer>
    </div>
  );
}
