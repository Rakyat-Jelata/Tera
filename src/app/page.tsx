import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-6">
      {/* Header / Navbar Sederhana */}
      <header className="max-w-5xl mx-auto w-full flex justify-between items-center py-4">
        <h1 className="text-2xl font-extrabold tracking-wider text-indigo-400">
          TERA<span className="text-white">PROP</span>
        </h1>
        <div className="space-x-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium hover:text-indigo-300 transition"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 rounded-xl transition"
          >
            Daftar Agen
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl mx-auto text-center space-y-6 my-auto">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-900 text-indigo-300 rounded-full border border-indigo-700">
          AI & AdTech Property Marketplace
        </span>
        <h2 className="text-4xl sm:text-6xl font-black leading-tight">
          Jual Properti Lebih Cepat dengan Kemampuan <span className="text-indigo-400">AI & Ads</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          Platform marketplace properti terpadu untuk agen profesional. Buat deskripsi pemasaran dalam hitungan detik dan jangkau calon pembeli potensial.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl shadow-lg transition text-center"
          >
            Mulai Sebagai Agen
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 font-bold rounded-xl border border-slate-700 transition text-center"
          >
            Masuk ke Dashboard
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} TERA Proptech. All rights reserved.
      </footer>
    </div>
  );
}
