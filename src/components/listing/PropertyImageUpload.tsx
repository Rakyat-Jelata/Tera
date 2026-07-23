"use client";

interface PropertyImageUploadProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyImageUpload({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyImageUploadProps) {

  const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.files) return;

  updateFormData(
    "images",
    Array.from(e.target.files)
  );
};
  
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Upload Foto Properti
        </h2>

        <p className="mt-2 text-slate-500">
          Upload foto terbaik agar iklan lebih menarik perhatian calon pembeli.
        </p>

      </div>

      <div className="rounded-3xl border-2 border-dashed border-cyan-300 bg-cyan-50 p-12 text-center">

        <div className="text-6xl">
          📷
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-800">
          Upload Foto
        </h3>

        <p className="mt-2 text-slate-500">
          Maksimal 30 foto (JPG, PNG, WEBP)
        </p>

        <input
  type="file"
  multiple
  accept="image/*"
  onChange={handleImageChange}
  className="hidden"
  id="property-images"
/>
<p className="mt-4 text-sm text-slate-500">
  {formData.images.length} foto dipilih
</p>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">

        <h4 className="font-bold text-slate-800">
          Tips Foto Berkualitas
        </h4>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">

          <li>Foto tampak depan bangunan.</li>

          <li>Ruang tamu, kamar, dapur, kamar mandi.</li>

          <li>Halaman dan lingkungan sekitar.</li>

          <li>Gunakan foto dengan pencahayaan yang baik.</li>

          <li>Minimal 10 foto untuk hasil terbaik.</li>

        </ul>

      </div>

      <div className="mt-10 flex justify-between">

        <div className="mt-10 flex justify-between">

  <button
    onClick={onBack}
    className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100"
  >
    ← Kembali
  </button>

  <button
    onClick={onNext}
    className="rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700"
  >
    Simpan & Lanjut →
  </button>

</div>
    </section>
  );
}
