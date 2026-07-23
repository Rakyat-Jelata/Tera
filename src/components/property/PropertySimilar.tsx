import Link from "next/link";
import Image from "next/image";

interface PropertySimilarProps {
  properties: {
    id: number | string;
    title: string;
    location: string;
    price: string;
    image: string;
  }[];
}

export default function PropertySimilar({
  properties,
}: PropertySimilarProps) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Properti Serupa
          </h2>

          <p className="mt-2 text-slate-500">
            Rekomendasi properti lain yang mungkin Anda sukai.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {properties.map((item) => (

          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
          >

            <div className="relative h-52">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                📍 {item.location}
              </p>

              <h4 className="mt-4 text-2xl font-extrabold text-cyan-600">
                {item.price}
              </h4>

              <Link
                href={`/properties/${item.id}`}
                className="mt-5 block rounded-2xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
              >
                Lihat Detail
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
