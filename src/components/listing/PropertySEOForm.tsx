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

        <p className="mt-2 text-slate-500">
          Optimalkan iklan agar lebih mudah ditemukan di Google dan mesin pencari.
        </p>

      </div>

      <div className="space-y-6">

        {/* SEO Title */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            SEO Title
          </label>

          <input
            type="text"
            value={formData.seoTitle}
            onChange={(e) =>
              updateFormData("seoTitle", e.target.value)
            }
            placeholder="Rumah Minimalis Dijual di Bogor"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
          />

        </div>

        {/* SEO Description */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            SEO Description
          </label>

          <textarea
            rows={5}
            value={formData.seoDescription}
            onChange={(e) =>
              updateFormData("seoDescription", e.target.value)
            }
            placeholder="Deskripsi singkat yang akan tampil di hasil pencarian Google..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
          />

        </div>

        {/* SEO Keywords */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            SEO Keywords
          </label>

          <input
            type="text"
            value={formData.seoKeywords}
            onChange={(e) =>
              updateFormData("seoKeywords", e.target.value)
            }
            placeholder="rumah bogor, rumah murah, rumah minimalis"
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
          />

          <p className="mt-2 text-sm text-slate-500">
            Pisahkan setiap keyword dengan tanda koma (,)
          </p>

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
