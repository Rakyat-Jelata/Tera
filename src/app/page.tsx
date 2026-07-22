import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';

// Inisialisasi Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Komponen Asinkron buat Fetch Data
export default async function HomePage() {
  // Ambil semua data properti dari tabel 'properties', urutkan dari yang terbaru
  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching properties:', error);
  }

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

      {/* 2. HERO BANNER */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Temukan Properti Impianmu
          </h1>
          <p className="text-blue-100 text-base md:text-lg mb-8">
            Cari rumah, apartemen, atau tanah terbaik dengan mudah dan cepat.
          </p>

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

      {/* 3. LIST PROPERTI DARI SUPABASE */}
      <main className="max-w-6xl mx-auto px-4 py-12 flex-1 w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Properti Terbaru</h2>
            <p className="text-gray-500 text-sm">Pilihan hunian siap huni pekan ini</p>
          </div>
        </div>

        {/* Jika Belum Ada Data */}
        {(!properties || properties.length === 0) && (
          <div className="bg-white rounded-2xl p-8 text-center border border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">Belum ada properti yang ditambahkan.</p>
            <Link 
              href="/dashboard" 
              className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium"
            >
              Tambah Properti Pertama
            </Link>
          </div>
        )}

        {/* Grid Card Properti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties?.map((item: any) => (
            <div 
              key={item.id || item.created_at} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Tempat Gambar */}
              <div className="h-52 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title || 'Foto Properti'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">Tidak ada foto</span>
                )}
                {item.transaction_type && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase">
                    {item.transaction_type}
                  </span>
                )}
              </div>

              {/* Detail Properti */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xl font-bold text-blue-600 mb-1">
                    Rp {Number(item.price || 0).toLocaleString('id-ID')}
                  </p>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1">
                    {item.title || item.property_type || 'Properti Tanpa Judul'}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                    📍 {item.location || 'Lokasi tidak disebutkan'}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-600 pt-3 border-t">
                  <span>🛏️ {item.bedroom || 0} K. Tidur</span>
                  <span>🚿 {item.bathroom || 0} K. Mandi</span>
                  {item.building_size && <span>📐 {item.building_size} m²</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Teravia MP. All rights reserved.</p>
      </footer>
    </div>
  );
}
