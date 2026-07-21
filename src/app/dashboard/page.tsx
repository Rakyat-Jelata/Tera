'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [propertyType, setPropertyType] = useState('Rumah');
  const [transactionType, setTransactionType] = useState('Jual');
  const [price, setPrice] = useState('');
  const [bedroom, setBedroom] = useState('3');
  const [bathroom, setBathroom] = useState('2');
  const [landSize, setLandSize] = useState('90');
  const [buildingSize, setBuildingSize] = useState('120');
  const [regencyName, setRegencyName] = useState('Jakarta Selatan');
  const [provinceName, setProvinceName] = useState('DKI Jakarta');
  
  // Output AI
  const [aiDescription, setAiDescription] = useState('');

  // 1. Function Generate AI Description
  import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, propertyType, transactionType, price, bedroom, bathroom, landSize, buildingSize, regencyName, provinceName } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY belum terpasang di Environment Variables Vercel.' }, { status: 500 });
    }

    const prompt = `
Kamu adalah seorang Property Copywriter & Marketer Profesional. 
Buatkan deskripsi penjualan properti yang sangat menarik, persuasif, dan rapi untuk listing berikut:

- Judul: ${title}
- Jenis Properti: ${propertyType} (${transactionType})
- Harga: Rp ${Number(price || 0).toLocaleString('id-ID')}
- Lokasi: ${regencyName || 'Indonesia'}, ${provinceName || ''}
- Spesifikasi: ${bedroom || 0} Kamar Tidur, ${bathroom || 0} Kamar Mandi, Luas Tanah ${landSize || 0} m², Luas Bangunan ${buildingSize || 0} m²

Format Output:
1. Headline Hook (1 kalimat mencolok)
2. Keunggulan Utama Properti (Gunakan bullet points & emoji menarik)
3. Call to Action (Ajak calon pembeli untuk hubungi agen)
    `;

    // Memanggil API Gemini 1.5 Flash
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.error?.message || 'Terjadi kesalahan pada server Gemini API.';
      return NextResponse.json({ error: `[Gemini Error ${response.status}] ${errorMsg}` }, { status: response.status });
    }

    // Pengecekan teks hasil generate dari struktur response Gemini
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json({ 
        error: 'AI memproses permintaan, tetapi tidak mengembalikan teks deskripsi. Coba ubah detail properti.' 
      }, { status: 500 });
    }

    return NextResponse.json({ description: generatedText });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

  // 2. Function Simpan Listing ke Supabase
  const handleSubmitListing = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert('Sesi habis, silakan login kembali.');
      router.push('/login');
      return;
    }

    const { error } = await supabase.from('listings').insert([
      {
        user_id: user.id,
        title,
        property_type: propertyType,
        transaction_type: transactionType,
        price: Number(price),
        bedroom: Number(bedroom),
        bathroom: Number(bathroom),
        land_size: Number(landSize),
        building_size: Number(buildingSize),
        regency_name: regencyName,
        province_name: provinceName,
        ai_description: aiDescription,
      },
    ]);

    setLoading(false);

    if (error) {
      alert('Gagal menyimpan listing: ' + error.message);
    } else {
      alert('🎉 Listing properti berhasil diterbitkan!');
      setTitle('');
      setPrice('');
      setAiDescription('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Dashboard Agen TERAVIA
            </h1>
            <p className="text-xs text-slate-400">Tambah Listing & Operasikan AI Marketing Engine</p>
          </div>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push('/login');
            }}
            className="text-xs bg-slate-900 border border-slate-800 hover:bg-slate-800 px-3 py-2 rounded-lg text-slate-300"
          >
            Keluar
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmitListing} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kolom Kiri: Input Properti */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-800 pb-2">
              📍 Detail Properti
            </h2>

            <div>
              <label className="text-xs text-slate-400">Judul Properti</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Rumah Minimalis Modern BSD City"
                className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:border-indigo-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">Tipe</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                >
                  <option value="Rumah">Rumah</option>
                  <option value="Ruko">Ruko</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Tanah">Tanah</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400">Transaksi</label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                >
                  <option value="Jual">Jual</option>
                  <option value="Sewa">Sewa</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400">Harga (Rp)</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="1500000000"
                className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:border-indigo-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">Kamar Tidur</label>
                <input
                  type="number"
                  value={bedroom}
                  onChange={(e) => setBedroom(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Kamar Mandi</label>
                <input
                  type="number"
                  value={bathroom}
                  onChange={(e) => setBathroom(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">Luas Tanah (m²)</label>
                <input
                  type="number"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Luas Bangunan (m²)</label>
                <input
                  type="number"
                  value={buildingSize}
                  onChange={(e) => setBuildingSize(e.target.value)}
                  className="w-full mt-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan: AI Generator & Publish */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3">
                <h2 className="text-lg font-semibold text-slate-200">
                  ✨ AI Copywriter Engine
                </h2>
                <button
                  type="button"
                  onClick={handleGenerateAI}
                  disabled={aiLoading}
                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-xs rounded-lg transition"
                >
                  {aiLoading ? 'Memproses AI...' : 'Generate Deskripsi AI'}
                </button>
              </div>

              <textarea
                rows={12}
                value={aiDescription}
                onChange={(e) => setAiDescription(e.target.value)}
                placeholder="Klik tombol 'Generate Deskripsi AI' di atas untuk membuat deskripsi pemasaran otomatis berbasis AI..."
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-300 leading-relaxed outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-600/20"
            >
              {loading ? 'Menyimpan...' : 'Terbitkan Listing Properti'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
