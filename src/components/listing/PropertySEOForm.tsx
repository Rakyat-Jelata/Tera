"use client";

interface PropertySEOFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertySEOForm({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertySEOFormProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          SEO Properti
        </h2>

        <p className="mt-2 text-slate-600">
          Optimalkan iklan agar lebih mudah ditemukan di Google dan mesin pencari.
        </p>
      </div>

      <div className="space-y-6">

        {/* SEO Title */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            SEO Title
          </label>

          <input
            type="text"
            value={formData.seoTitle}
            onChange={(e) =>
              updateFormData("seoTitle", e.target.value)
            }
            placeholder="Rumah Minimalis Dijual di Bogor"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

        </div>

        {/* SEO Description */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            SEO Description
          </label>

          <textarea
            rows={5}
            value={formData.seoDescription}
            onChange={(e) =>
              updateFormData("seoDescription", e.target.value)
            }
            placeholder="Deskripsi singkat yang akan tampil di hasil pencarian Google..."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

        </div>

        {/* SEO Keywords */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            SEO Keywords
          </label>

          <input
            type="text"
            value={formData.seoKeywords}
            onChange={(e) =>
              updateFormData("seoKeywords", e.target.value)
            }
            placeholder="rumah bogor, rumah murah, rumah minimalis"
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

          <p className="mt-2 text-sm text-slate-600">
            Pisahkan setiap keyword menggunakan tanda koma (,)
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-cyan-50 p-6">

        <h4 className="font-bold text-slate-900">
          💡 Tips SEO
        </h4>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Gunakan judul yang mengandung lokasi properti.</li>
          <li>Masukkan tipe properti pada judul.</li>
          <li>Gunakan kata kunci yang sering dicari.</li>
          <li>Hindari keyword yang berulang-ulang.</li>
          <li>Buat deskripsi singkat namun informatif.</li>
        </ul>

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
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
