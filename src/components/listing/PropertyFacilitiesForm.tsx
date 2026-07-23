"use client";

interface PropertyFacilitiesFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function PropertyFacilitiesForm({
  formData,
  updateFormData,
  onBack,
  onNext,
}: PropertyFacilitiesFormProps) {
  const toggleFacility = (facility: string) => {
    const exists = formData.facilities.includes(facility);

    if (exists) {
      updateFormData(
        "facilities",
        formData.facilities.filter((item: string) => item !== facility)
      );
    } else {
      updateFormData(
        "facilities",
        [...formData.facilities, facility]
      );
    }
  };

  const facilities = [
    "Carport",
    "Garasi",
    "Taman",
    "Kolam Renang",
    "Balkon",
    "Gudang",
    "Dapur",
    "Ruang Keluarga",
    "Ruang Makan",
    "Mushola",
    "Listrik",
    "PDAM",
    "Sumur Bor",
    "Internet Fiber",
    "Telepon",
    "CCTV",
    "Security 24 Jam",
    "One Gate System",
    "Jogging Track",
    "Playground",
    "Club House",
    "Gym",
    "Lift",
    "Water Heater",
  ];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Fasilitas Properti
        </h2>

        <p className="mt-2 text-slate-600">
          Pilih fasilitas yang tersedia pada properti Anda.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {facilities.map((facility) => (
          <label
            key={facility}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-300 bg-white p-4 transition hover:border-cyan-500 hover:bg-cyan-50"
          >
            <input
              type="checkbox"
              checked={formData.facilities.includes(facility)}
              onChange={() => toggleFacility(facility)}
              className="h-5 w-5 rounded border-slate-400 text-cyan-600 focus:ring-2 focus:ring-cyan-400"
            />

            <span className="font-semibold text-slate-900">
              {facility}
            </span>
          </label>
        ))}

      </div>

      <div className="mt-10 flex justify-between">

        <button
          onClick={onBack}
          className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
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
