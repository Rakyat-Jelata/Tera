'use client';

import { useState } from 'react';
import { supabase, uploadPropertyImage } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AddPropertyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // State Form
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert('Pilih foto properti terlebih dahulu!');

    setLoading(true);

    try {
      // 1. Upload Foto ke Supabase Storage
      const imageUrl = await uploadPropertyImage(imageFile);

      if (!imageUrl) {
        alert('Gagal mengunggah foto!');
        setLoading(false);
        return;
      }

      // 2. Simpan Data Properti ke Database Supabase
      const { data, error } = await supabase.from('properties').insert([
        {
          title,
          price: Number(price),
          location,
          description,
          image_url: imageUrl, // URL dari Supabase Storage
        },
      ]);

      if (error) throw error;

      alert('Properti berhasil ditambahkan!');
      router.push('/dashboard'); // Redirect ke dashboard utama
    } catch (err: any) {
      console.error(err);
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md my-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tambah Properti Baru</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Judul Properti</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Rumah Minimalis Modern"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="750000000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lokasi</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Jakarta Selatan"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Keterangan singkat properti..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Foto Utama</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => e.target.files?.[0] && setImageFile(e.target.files[0])}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Mengunggah & Menyimpan...' : 'Simpan Properti'}
        </button>
      </form>
    </div>
  );
        }
