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

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Fasilitas Properti
          </h2>

          <p className="mt-2 text-slate-600">
            Pilih seluruh fasilitas yang tersedia pada properti Anda.
          </p>
        </div>

        <div className="rounded-xl bg-cyan-50 px-4 py-2 text-cyan-700 font-semibold">
          {formData.facilities.length} Dipilih
        </div>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {facilities.map((facility) => {

          const selected = formData.facilities.includes(facility);

          return (
            <label
              key={facility}
              className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition

              ${
                selected
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-slate-300 bg-white hover:border-cyan-400"
              }`}
            >

              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleFacility(facility)}
                className="h-5 w-5"
              />

              <span className="font-semibold text-slate-900">
                {facility}
              </span>

            </label>
          );

        })}

      </div>

      {/* Fasilitas Lainnya */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-900">
          Fasilitas Lainnya
        </label>

        <textarea
          rows={3}
          value={formData.otherFacilities}
          onChange={(e) =>
            updateFormData("otherFacilities", e.target.value)
          }
          placeholder="Contoh: Smart Home, Solar Panel, Rooftop Garden, dll."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        />

      </div>

      <div className="mt-8 flex justify-between">

        <button
          type="button"
          onClick={() => updateFormData("facilities", [])}
          className="rounded-2xl border border-red-300 px-6 py-3 font-semibold text-red-600 hover:bg-red-50"
        >
          Reset Fasilitas
        </button>

        <div className="flex gap-4">

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

      </div>

    </section>
  );
}
