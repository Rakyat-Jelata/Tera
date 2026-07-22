'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = () => {
    console.log({
      keyword,
      category,
      type,
      price,
    });

    // TODO:
    // router.push(...)
    // atau fetch ke Supabase
  };

  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-2xl">

      <div className="grid gap-4 md:grid-cols-5">

        {/* Lokasi */}
        <input
          type="text"
          placeholder="Provinsi, Kota, Kecamatan..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-xl border border-slate-200 p-4 outline-none focus:border-cyan-500"
        />

        {/* Kategori */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-200 p-4"
        >
          <option value="">Kategori</option>
          <option value="hunian">Hunian</option>
          <option value="komersial">Komersial</option>
          <option value="tanah">Tanah & Lahan</option>
          <option value="institusi">Institusi</option>
        </select>

        {/* Tipe */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border border-slate-200 p-4"
        >
          <option value="">Tipe Properti</option>
          <option>Rumah</option>
          <option>Apartemen</option>
          <option>Villa</option>
          <option>Ruko</option>
          <option>Gudang</option>
          <option>Tanah</option>
          <option>Kost</option>
        </select>

        {/* Harga */}
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="rounded-xl border border-slate-200 p-4"
        >
          <option value="">Harga</option>
          <option value="500000000">
            &lt; Rp500 Juta
          </option>

          <option value="1000000000">
            Rp500 Juta - Rp1 Miliar
          </option>

          <option value="5000000000">
            Rp1 - Rp5 Miliar
          </option>

          <option value="99999999999">
            &gt; Rp5 Miliar
          </option>
        </select>

        {/* Tombol */}
        <button
          onClick={handleSearch}
          className="rounded-xl bg-cyan-600 p-4 font-semibold text-white transition hover:bg-cyan-700"
        >
          Cari Properti
        </button>

      </div>
    </div>
  );
          }
