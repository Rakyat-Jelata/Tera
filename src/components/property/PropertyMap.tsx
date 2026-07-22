interface PropertyMapProps {
  location: string;
}

export default function PropertyMap({
  location,
}: PropertyMapProps) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Lokasi Properti
        </h2>

        <p className="mt-2 text-slate-500">
          📍 {location}
        </p>

      </div>

      <div className="flex h-[420px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100">

        <div className="text-center">

          <div className="text-6xl">
            🗺️
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-800">
            Google Maps
          </h3>

          <p className="mt-2 text-slate-500">
            Integrasi Google Maps / OpenStreetMap
            akan ditambahkan pada fase integrasi API.
          </p>

        </div>

      </div>

    </section>
  );
}
