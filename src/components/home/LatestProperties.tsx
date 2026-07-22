import Link from "next/link";
import PropertyGrid from "@/components/property/PropertyGrid";

const latestProperties = [
  {
    id: 101,
    title: "Rumah Scandinavian",
    location: "Bandung",
    price: "Rp 975 Juta",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900",
    date: "2 Jam lalu",
    type: "Rumah",
  },
  {
    id: 102,
    title: "Apartemen Premium",
    location: "Jakarta Selatan",
    price: "Rp 1,4 Miliar",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900",
    date: "5 Jam lalu",
    type: "Apartemen",
  },
  {
    id: 103,
    title: "Tanah Kavling",
    location: "Sentul",
    price: "Rp 650 Juta",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
    date: "Hari Ini",
    type: "Tanah",
  },
  {
    id: 104,
    title: "Ruko 3 Lantai",
    location: "Bekasi",
    price: "Rp 2,2 Miliar",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900",
    date: "Hari Ini",
    type: "Ruko",
  },
];

export default function LatestProperties() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Properti Terbaru
            </h2>

            <p className="mt-2 text-slate-500">
              Listing terbaru yang baru dipublikasikan.
            </p>

          </div>

          <Link
            href="/properties"
            className="font-semibold text-cyan-600 hover:underline"
          >
            Semua Listing →
          </Link>

        </div>

        <PropertyGrid properties={latestProperties} />

          {latestProperties.map((property) => (

            <Link
              key={property.id}
              href={`/property/${property.id}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative">

                <img
                  src={property.image}
                  alt={property.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
                  {property.type}
                </span>

              </div>

              <div className="p-5">

                <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
                  {property.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 {property.location}
                </p>

                <p className="mt-4 text-2xl font-bold text-cyan-600">
                  {property.price}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">

                  <span>{property.date}</span>

                  <span className="font-semibold text-cyan-600">
                    Detail →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
    }
