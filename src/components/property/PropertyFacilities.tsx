interface PropertyFacilitiesProps {
  facilities?: string[];
}

export default function PropertyFacilities({
  facilities = [],
}: PropertyFacilitiesProps) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-900">
        Fasilitas Properti
      </h2>

      <p className="mt-2 text-slate-500">
        Fasilitas yang tersedia pada properti ini.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {facilities.map((facility) => (
          <div
            key={facility}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-lg">
              ✅
            </div>

            <span className="font-medium text-slate-700">
              {facility}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}
