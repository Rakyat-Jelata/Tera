"use client";

interface PropertyPreviewProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}
export default function PropertyPreview({
  formData,
  updateFormData,
  onNext,
  onBack,
}: PropertyPreviewProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Preview Listing
        </h2>

        <p className="mt-2 text-slate-500">
          Periksa kembali seluruh informasi sebelum dipublikasikan.
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200">

        <div className="aspect-video bg-slate-200 flex items-center justify-center">

          <span className="text-slate-500">
            Preview Foto Properti
          </span>

        </div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-slate-900">
            Rumah Minimalis Modern
          </h3>

          <p className="mt-2 text-slate-500">
            📍 Bogor, Jawa Barat
          </p>

          <h4 className="mt-6 text-3xl font-extrabold text-cyan-600">
            Rp 850.000.000
          </h4>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              🛏️ 3 KT
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              🚿 2 KM
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              🌳 120 m²
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center">
              🏠 90 m²
            </div>

          </div>

          <div className="mt-8">

            <h4 className="text-xl font-bold text-slate-900">
              Deskripsi
            </h4>

            <p className="mt-3 leading-7 text-slate-600">
              Preview deskripsi properti akan tampil di sini.
            </p>

          </div>

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
          Lanjut ke Publish →
        </button>

      </div>

    </section>
  );
}
