"use client";

interface PropertyVideoUploadProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PropertyVideoUpload({
  onNext,
  onBack,
}: PropertyVideoUploadProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Video & Virtual Tour
        </h2>

        <p className="mt-2 text-slate-500">
          Tambahkan video atau virtual tour untuk meningkatkan daya tarik iklan.
          Langkah ini bersifat opsional.
        </p>

      </div>

      <div className="space-y-6">

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Upload Video
          </label>

          <input
            type="file"
            accept="video/*"
            className="w-full rounded-2xl border border-slate-300 p-4"
          />

          <p className="mt-2 text-sm text-slate-500">
            Format: MP4, MOV, WEBM • Maksimal 200 MB
          </p>

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Link YouTube
          </label>

          <input
            type="url"
            placeholder="https://youtube.com/..."
            className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Link Virtual Tour (Matterport / Kuula / 360°)
          </label>

          <input
            type="url"
            placeholder="https://..."
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
