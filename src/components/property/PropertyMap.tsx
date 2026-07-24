"use client";

interface PropertyMapProps {
  location: string;
  latitude?: number | null;
  longitude?: number |null;
}

export default function PropertyMap({
  location,
  latitude,
  longitude,
}: PropertyMapProps) {

  const hasCoordinate =
    latitude !== null &&
    latitude !== undefined &&
    longitude !== null &&
    longitude !== undefined;

  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-900">
        Lokasi Properti
      </h2>

      <p className="mt-2 text-slate-600">
        {location || "-"}
      </p>

      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">

        {hasCoordinate ? (

          <iframe
            title="Google Maps"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        ) : (

          <div className="flex h-[420px] items-center justify-center bg-slate-100">

            <div className="text-center">

              <div className="text-6xl">
                📍
              </div>

              <p className="mt-4 text-lg font-semibold text-slate-700">
                Lokasi belum tersedia
              </p>

              <p className="mt-2 text-slate-500">
                Koordinat properti belum diisi.
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}
