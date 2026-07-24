"use client";

interface PropertyPreviewProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function PropertyPreview({
  formData,
  onNext,
  onBack,
}: PropertyPreviewProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Preview Listing
        </h2>

        <p className="mt-2 text-slate-600">
          Periksa kembali seluruh informasi sebelum dipublikasikan.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200">

        <div className="flex aspect-video items-center justify-center bg-slate-100">

          {formData.images.length > 0 ? (
            <img
              src={URL.createObjectURL(formData.images[0])}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-slate-500">
              Belum ada foto yang diupload
            </span>
          )}

        </div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-slate-900">
            {formData.title || "Judul Properti"}
          </h3>

          <p className="mt-2 text-slate-600">
            📍 {formData.address || "-"}
          </p>

          <h4 className="mt-6 text-3xl font-extrabold text-cyan-600">
            Rp{" "}
{formData.price
  ? Number(formData.price).toLocaleString("id-ID")
  : "0"}
          </h4>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

            <div className="rounded-2xl bg-slate-100 p-4 text-center font-semibold">
              🛏️ {formData.bedroom || 0} KT
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center font-semibold">
              🚿 {formData.bathroom || 0} KM
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center font-semibold">
              🌳 {formData.landArea || 0} m²
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 text-center font-semibold">
              🏠 {formData.buildingArea || 0} m²
            </div>

          </div>

          <div className="mt-8">

            <h4 className="text-xl font-bold text-slate-900">
              Informasi Properti
            </h4>

            <div className="mt-4 grid gap-3 md:grid-cols-2">

              <p><strong>Kategori :</strong> {formData.category || "-"}</p>
              <p><strong>Tipe :</strong> {formData.propertyType || "-"}</p>
              <p><strong>Transaksi :</strong> {formData.transaction || "-"}</p>
              <p><strong>Legalitas :</strong> {formData.legal || "-"}</p>
              <p><strong>Lantai :</strong> {formData.floor || "-"}</p>
              <p><strong>Fasilitas :</strong> {formData.facilities?.length ? formData.facilities.join(", "): "-"}</p>

            </div>

          </div>

          <div className="mt-8">

            <h4 className="text-xl font-bold text-slate-900">
              Deskripsi
            </h4>

            <div className="mt-3 whitespace-pre-line rounded-2xl bg-slate-50 p-6 leading-7 text-slate-700">

              {formData.aiDescription ||
                formData.shortDescription ||
                "Belum ada deskripsi."}

            </div>

          </div>

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
          Lanjut ke Publish →
        </button>

      </div>

    </section>
  );
}
