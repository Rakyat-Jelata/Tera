import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* 1. NAVBAR */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-600">Teravia MP</div>
          <nav className="flex gap-4 items-center">
            <Link 
              href="/dashboard" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              + Tambah Properti
            </Link>
          </nav>
        </div>
      </header>

      {/* 2. HERO BANNER & SEARCH */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Temukan Properti Impianmu
          </h1>
          <p className="text-blue-100 text-base md:text-lg mb-8">
            Cari rumah, apartemen, atau tanah terbaik dengan mudah dan cepat.
          </p>

          {/* Form Pencarian Dummy */}
          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Cari lokasi atau nama properti..."
              className="w-full px-4 py-3 text-gray-700 rounded-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* 3. PROPERTI TERBARU (GRID) */}
      <main className="max-w-6xl mx-auto px-4 py-12 flex-1 w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Properti Terbaru</h2>
            <p className="text-gray-500 text-sm">Pilihan hunian siap huni pekan ini</p>
          </div>
        </div>

        {/* Grid Card Dummy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
              <span>[ Foto Properti ]</span>
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Dijual
              </span>
            </div>
            <div className="p-5">
              <p className="text-xl font-bold text-blue-600 mb-1">Rp 850.000.000</p>
              <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1">
                Rumah Minimalis Modern
              </h3>
              <p className="text-gray-500 text-sm mb-4">📍 Jakarta Selatan</p>
              
              <div className="flex items-center gap-4 text-xs text-gray-600 pt-3 border-t">
                <span>🛏️ 3 K. Tidur</span>
                <span>🚿 2 K. Mandi</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
              <span>[ Foto Properti ]</span>
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Disewa
              </span>
            </div>
            <div className="p-5">
              <p className="text-xl font-bold text-blue-600 mb-1">Rp 45.000.000 / thn</p>
              <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1">
                Apartemen Studio Full Furnished
              </h3>
              <p className="text-gray-500 text-sm mb-4">📍 Bandung Central</p>
              
              <div className="flex items-center gap-4 text-xs text-gray-600 pt-3 border-t">
                <span>🛏️ 1 K. Tidur</span>
                <span>🚿 1 K. Mandi</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Teravia MP. All rights reserved.</p>
      </footer>
    </div>
  );
}
