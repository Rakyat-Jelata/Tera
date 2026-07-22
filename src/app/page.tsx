import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. NAVBAR */}
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
            <Link href="#features" className="hover:text-blue-600 transition">Fitur</Link>
            <Link href="#listings" className="hover:text-blue-600 transition">Properti</Link>
            <Link href="#about" className="hover:text-blue-600 transition">Tentang Kami</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 font-medium text-slate-600 hover:text-blue-600 transition"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/20 transition"
            >
              Daftar Gratis
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Temukan Properti Impian dengan Sentuhan <span className="text-blue-600">Kecerdasan Buatan</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Platform modern pencarian, analisis, dan investasi properti terbaik di Indonesia secara presisi dan cepat.
            </p>

            {/* SEARCH BAR */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="bg-white p-2 md:p-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Cari lokasi, kota, atau nama perumahan..."
                  className="flex-1 px-4 py-3 bg-transparent outline-none text-slate-800 placeholder-slate-400"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-500/30">
                  Cari Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE HIGHLIGHTS */}
        <section id="features" className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Mengapa Memilih TERA?</h2>
            <p className="text-slate-600 mt-2">Solusi lengkap kebutuhan properti masa kini.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                🤖
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI Property Valuer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dapatkan estimasi harga pasar properti secara akurat berbasis analisis algoritma AI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Proses Kilat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Filter ribuan Listing sesuai budget dan kriteria kamu hanya dalam hitungan detik.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Aman & Terverifikasi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seluruh agen dan listing properti telah melewati verifikasi keamanan data tingkat tinggi.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA SECTION */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Siap Menemukan Rumah Impianmu?</h2>
            <p className="text-blue-100 max-w-xl mx-auto">
              Bergabunglah bersama ribuan pengguna lain dan nikmati pengalaman mencari properti yang simpel.
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition"
            >
              Mulai Sekarang — Gratis
            </Link>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-8 px-6 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} TERA PropTech. All rights reserved.</p>
      </footer>
    </div>
  )
}
