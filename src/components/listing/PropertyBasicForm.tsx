"use client";

interface PropertyBasicFormProps {
  onNext: () => void;
}

export default function PropertyBasicForm({
  onNext,
}: PropertyBasicFormProps) {
  
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Informasi Properti
        </h2>

        <p className="mt-2 text-slate-500">
          Lengkapi informasi dasar properti Anda.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Judul */}
        <div className="md:col-span-2">

          <label className="mb-2 block font-semibold text-slate-700">
            Judul Properti
          </label>

          <input
            type="text"
            placeholder="Contoh: Rumah Minimalis Modern Dekat Tol"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        {/* Kategori */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kategori
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">

            <option>Hunian</option>
            <option>Komersial</option>
            <option>Tanah & Lahan</option>
            <option>Institusi & Fasilitas</option>

          </select>

        </div>

        {/* Tipe */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Tipe Properti
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">

            <option>Rumah</option>
            <option>Apartemen</option>
            <option>Villa</option>
            <option>Ruko</option>
            <option>Gudang</option>
            <option>Tanah</option>

          </select>

        </div>

        {/* Transaksi */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Transaksi
          </label>

          <select className="w-full rounded-2xl border border-slate-300 p-4">

            <option>Jual</option>
            <option>Sewa</option>

          </select>

        </div>

        {/* Harga */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Harga
          </label>

          <input
            type="number"
            placeholder="850000000"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        {/* Deskripsi Singkat */}
        <div className="md:col-span-2">

          <label className="mb-2 block font-semibold text-slate-700">
            Deskripsi Singkat
          </label>

          <textarea
            rows={5}
            placeholder="Tuliskan ringkasan properti..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

      </div>

      <div className="mt-10 flex justify-end">

        <button
  onClick={onNext}
  className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
>
  Simpan & Lanjut →
</button>

      </div>

    </section>
  );
}
