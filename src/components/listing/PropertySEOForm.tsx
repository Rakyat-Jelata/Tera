"use client";

interface PropertySEOFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PropertySEOForm({
  onNext,
  onBack,
}: PropertySEOFormProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          SEO & Tag Listing
        </h2>

        <p className="mt-2 text-slate-500">
          Tambahkan kata kunci agar properti lebih mudah ditemukan di pencarian TERAVIA maupun Google.
        </p>

      </div>

      <div className="grid gap-6">

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Meta Title
          </label>

          <input
            type="text"
            placeholder="Rumah Minimalis Modern Bogor Dekat Tol"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Meta Description
          </label>

          <textarea
            rows={4}
            placeholder="Deskripsi singkat yang akan muncul di hasil pencarian Google..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Keyword
          </label>

          <input
            type="text"
            placeholder="rumah bogor, rumah minimalis, dekat tol, jual rumah"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

          <p className="mt-2 text-sm text-slate-500">
            Pisahkan setiap keyword menggunakan tanda koma (,).
          </p>

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            URL Slug
          </label>

          <input
            type="text"
            placeholder="rumah-minimalis-modern-bogor"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
        >
          ← Kembali
        </button>

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
