import Link from "next/link";
import Image from "next/image";

interface PropertySimilarProps {
  properties: {
    id: string | number;
    title: string;
    location: string;
    price: string;
    image: string;
    bedroom: number;
    bathroom: number;
    land: number;
    building: number;
    badge?: "featured" | "new" | "hot" | "sale" | "rent" | "sold";
  }[];
}

export default function PropertySimilar({
  properties,
}: PropertySimilarProps) {
  if (properties.length === 0) {
    return (
      <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-slate-900">
          Properti Serupa
        </h2>

        <p className="mt-6 text-slate-500">
          Belum ada properti serupa.
        </p>

      </section>
    );
  }

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Properti Serupa
        </h2>

        <p className="mt-2 text-slate-500">
          Rekomendasi properti lain yang mungkin Anda sukai.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {properties.map((item) => (

          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
          >

            <div className="relative h-56 overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {item.badge && (
                <div className="absolute left-4 top-4 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase text-white">
                  {item.badge}
                </div>
              )}

            </div>

            <div className="p-6">

              <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                📍 {item.location}
              </p>

              <h4 className="mt-4 text-2xl font-extrabold text-cyan-600">
                {item.price}
              </h4>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">

                <div>
                  🛏️ {item.bedroom} KT
                </div>

                <div>
                  🚿 {item.bathroom} KM
                </div>

                <div>
                  🌳 {item.land} m²
                </div>

                <div>
                  🏠 {item.building} m²
                </div>

              </div>

              <Link
                href={`/properties/${item.id}`}
                className="mt-6 block rounded-2xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
              >
                Lihat Detail
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}
