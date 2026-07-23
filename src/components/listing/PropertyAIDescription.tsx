"use client";

interface PropertyAIDescriptionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PropertyAIDescription({
  onNext,
  onBack,
}: PropertyAIDescriptionProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          AI Description Generator
        </h2>

        <p className="mt-2 text-slate-500">
          Biarkan AI membantu membuat deskripsi properti yang profesional dan menarik.
        </p>

      </div>

      <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8">

        <h3 className="text-xl font-bold text-cyan-700">
          🤖 TERAVIA AI Assistant
        </h3>

        <p className="mt-3 text-slate-600">
          AI akan membuat deskripsi berdasarkan informasi yang telah Anda isi
          pada langkah sebelumnya.
        </p>

        <button
          className="mt-6 rounded-2xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          Generate Deskripsi AI
        </button>

      </div>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700">
          Hasil Deskripsi
        </label>

        <textarea
          rows={12}
          placeholder="Hasil generate AI akan muncul di sini..."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
        />

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
