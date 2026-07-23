"use client";

interface PropertyVideoUploadProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyVideoUpload({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyVideoUploadProps) {
  const handleVideoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    updateFormData("video", e.target.files[0]);
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Video & Virtual Tour
        </h2>

        <p className="mt-2 text-slate-600">
          Tambahkan video atau virtual tour untuk meningkatkan daya tarik
          iklan. Langkah ini bersifat opsional.
        </p>
      </div>

      <div className="space-y-8">

        {/* Upload Video */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            Upload Video
          </label>

          <input
            id="property-video"
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />

          <label
            htmlFor="property-video"
            className="block cursor-pointer rounded-3xl border-2 border-dashed border-cyan-400 bg-cyan-50 p-10 text-center transition hover:bg-cyan-100"
          >
            <div className="text-5xl">🎥</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Klik untuk Upload Video
            </h3>

            <p className="mt-2 text-slate-600">
              MP4, MOV, WEBM • Maksimal 200 MB
            </p>
          </label>

          {formData.video && (
            <div className="mt-4 rounded-2xl bg-green-50 p-4">
              <p className="font-semibold text-green-700">
                ✅ Video berhasil dipilih
              </p>

              <p className="mt-1 text-slate-700">
                {formData.video.name}
              </p>
            </div>
          )}

        </div>

        {/* YouTube */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            Link YouTube
          </label>

          <input
            type="url"
            value={formData.youtubeUrl}
            onChange={(e) =>
              updateFormData("youtubeUrl", e.target.value)
            }
            placeholder="https://youtube.com/..."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

        </div>

        {/* Virtual Tour */}
        <div>

          <label className="mb-2 block font-semibold text-slate-900">
            Link Virtual Tour
          </label>

          <input
            type="url"
            value={formData.virtualTourUrl}
            onChange={(e) =>
              updateFormData("virtualTourUrl", e.target.value)
            }
            placeholder="https://..."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

        </div>

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
