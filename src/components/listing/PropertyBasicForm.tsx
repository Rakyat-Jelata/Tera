"use client";

interface PropertyBasicFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

export default function PropertyBasicForm({
  formData,
  updateFormData,
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
  value={formData.title}
  onChange={(e) =>
    updateFormData("title", e.target.value)
  }
  placeholder="Contoh: Rumah Minimalis Modern Dekat Tol"
  className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
/>

        </div>

        {/* Kategori */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Kategori
          </label>

          <select
  value={formData.category}
  onChange={(e) =>
    updateFormData("category", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>

  <option value="">Pilih Kategori</option>
  <option value="Hunian">Hunian</option>
  <option value="Komersial">Komersial</option>
  <option value="Tanah & Lahan">Tanah & Lahan</option>
  <option value="Institusi & Fasilitas">Institusi & Fasilitas</option>

</select>

        </div>

        {/* Tipe */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Tipe Properti
          </label>

          <select
  value={formData.propertyType}
  onChange={(e) =>
    updateFormData("propertyType", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>

  <option value="">Pilih Tipe</option>
  <option value="Rumah">Rumah</option>
  <option value="Apartemen">Apartemen</option>
  <option value="Villa">Villa</option>
  <option value="Ruko">Ruko</option>
  <option value="Gudang">Gudang</option>
  <option value="Tanah">Tanah</option>

</select>

        </div>

        {/* Transaksi */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Transaksi
          </label>

          <select
  value={formData.transaction}
  onChange={(e) =>
    updateFormData("transaction", e.target.value)
  }
  className="w-full rounded-2xl border border-slate-300 p-4"
>

  <option value="">Pilih Transaksi</option>
  <option value="Jual">Jual</option>
  <option value="Sewa">Sewa</option>

</select>

        </div>

        {/* Harga */}
        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Harga
          </label>

          <input
  type="number"
  value={formData.price}
  onChange={(e) =>
    updateFormData("price", e.target.value)
  }
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
