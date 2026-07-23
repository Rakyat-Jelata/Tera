import PropertyStepper from "@/components/listing/PropertyStepper";

export default function PasangIklanPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-slate-900">
            Pasang Iklan Properti
          </h1>

          <p className="mt-3 text-slate-600">
            Isi informasi properti Anda dengan lengkap agar lebih cepat
            ditemukan calon pembeli maupun penyewa.
          </p>

        </div>

        <PropertyStepper currentStep={1} />

        <div className="mt-8 rounded-3xl bg-white p-12 text-center shadow-lg">

          <div className="text-6xl">
            🏡
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Form Informasi Properti
          </h2>

          <p className="mt-3 text-slate-500">
            PropertyBasicForm akan ditambahkan pada langkah berikutnya.
          </p>

        </div>

      </div>

    </main>
  );
}
