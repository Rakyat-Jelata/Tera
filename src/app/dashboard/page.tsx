'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    propertyType: 'Rumah',
    transactionType: 'Jual',
    price: '',
    bedroom: 2,
    bathroom: 1,
    landSize: 60,
    buildingSize: 45,
    regencyName: '',
    provinceName: '',
    description: '',
  });

  // Function untuk panggil AI Backend Route
  const handleGenerateAI = async () => {
    if (!formData.title) {
      alert('Isi minimal Judul Properti terlebih dahulu!');
      return;
    }

    setGenerating(true);
    try {
      const res = await fetch('/api/generate-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Gagal AI: ${data.error || 'Terjadi kesalahan sistem'}`);
        return;
      }

      if (data.description) {
        setFormData((prev) => ({ ...prev, description: data.description }));
      }
    } catch (err: any) {
      alert(`Error Koneksi: ${err.message}`);
    } finally {
      setGenerating(false);
    }
  };

  // Function Simpan Listing ke Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        alert('Sesi login berakhir. Silakan login kembali.');
        return;
      }

      const { error } = await supabase.from('properties').insert([
        {
          user_id: user.id,
          title: formData.title,
          property_type: formData.propertyType,
          transaction_type: formData.transactionType,
          price: Number(formData.price),
          bedroom: Number(formData.bedroom),
          bathroom: Number(formData.bathroom),
          land_size: Number(formData.landSize),
          building_size: Number(formData.buildingSize),
          description: formData.description,
        },
      ]);

      if (error) throw error;

      alert('🎉 Listing properti berhasil diterbitkan!');
    } catch (error: any) {
      alert(`Gagal menyimpan: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Dashboard Agen TERAVIA</h1>
        <p className="text-slate-400 text-sm mb-6">Tambah Listing & Operasikan AI Marketing Engine</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Judul Properti</label>
            <input
              type="text"
              required
              placeholder="Contoh: Rumah Minimalis Modern BSD City"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipe</label>
              <select
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="Rumah">Rumah</option>
                <option value="Apartemen">Apartemen</option>
                <option value="Ruko">Ruko</option>
                <option value="Tanah">Tanah</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Harga (Rp)</label>
              <input
                type="number"
                required
                placeholder="1500000000"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium">Deskripsi Pemasaran</label>
              <button
                type="button"
                onClick={handleGenerateAI}
                disabled={generating}
                className="text-xs bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-lg text-white font-medium transition disabled:opacity-50"
              >
                {generating ? '✨ AI Menulis...' : '✨ Generate Deskripsi AI'}
              </button>
            </div>
            <textarea
              rows={6}
              placeholder="Klik tombol 'Generate Deskripsi AI' di atas untuk membuat deskripsi otomatis..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-indigo-500/20 disabled:opacity-50"
          >
            {loading ? 'Menyimpan...' : 'Terbitkan Listing Properti'}
          </button>
        </form>
      </div>
    </div>
  );
}
