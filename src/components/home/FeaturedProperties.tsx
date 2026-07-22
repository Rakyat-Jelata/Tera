import Link from "next/link";

const featuredProperties = [
  {
    id: 1,
    title: "Rumah Minimalis Modern",
    location: "Bogor, Jawa Barat",
    price: "Rp 850 Juta",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    bedroom: 3,
    bathroom: 2,
    land: 120,
    building: 90,
    badge: "Featured",
  },
  {
    id: 2,
    title: "Villa View Gunung",
    location: "Puncak, Bogor",
    price: "Rp 2,8 Miliar",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    bedroom: 4,
    bathroom: 3,
    land: 300,
    building: 220,
    badge: "Hot",
  },
  {
    id: 3,
    title: "Ruko Strategis",
    location: "Depok",
    price: "Rp 1,6 Miliar",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    bedroom: 2,
    bathroom: 2,
    land: 90,
    building: 180,
    badge: "New",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Properti Unggulan
            </h2>

            <p className="text-slate-500 mt-2">
              Listing pilihan terbaik TERAVIA.
            </p>
          </div>

          <Link
            href="/properties"
            className="text-cyan-600 font-semibold hover:underline"
          >
            Lihat Semua →
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredProperties.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-cyan-600 px-4 py-1 text-sm font-semibold text-white">
                  {item.badge}
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  📍 {item.location}
                </p>

                <h4 className="mt-4 text-2xl font-bold text-cyan-600">
                  {item.price}
                </h4>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">

                  <div>🛏 {item.bedroom} Kamar</div>

                  <div>🚿 {item.bathroom} KM</div>

                  <div>🌳 LT {item.land} m²</div>

                  <div>🏠 LB {item.building} m²</div>

                </div>

                <Link
                  href={`/property/${item.id}`}
                  className="mt-6 block rounded-xl bg-cyan-600 py-3 text-center font-semibold text-white transition hover:bg-cyan-700"
                >
                  Lihat Detail
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
