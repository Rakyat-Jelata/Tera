import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Rumah Minimalis Modern",
    location: "Bogor, Jawa Barat",
    price: "Rp 850 Juta",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
    bedroom: 3,
    bathroom: 2,
    land: 120,
    building: 90,
    description:
      "Rumah minimalis modern dengan desain nyaman dan lokasi strategis.",
  },
  {
    id: 2,
    title: "Villa View Gunung",
    location: "Puncak, Bogor",
    price: "Rp 2,8 Miliar",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
    bedroom: 4,
    bathroom: 3,
    land: 300,
    building: 220,
    description:
      "Villa dengan pemandangan gunung dan suasana sejuk.",
  },
];

export default async function PropertyDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const property = properties.find(
    (item) => item.id === Number(params.id)
  );

  if (!property) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <h1 className="text-3xl font-bold">
          Properti tidak ditemukan
        </h1>

        <Link
          href="/properties"
          className="mt-5 inline-block rounded-xl bg-cyan-600 px-5 py-3 text-white"
        >
          Kembali ke Listing
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/properties"
          className="mb-6 inline-block text-cyan-600"
        >
          ← Kembali ke Listing
        </Link>


        <div className="overflow-hidden rounded-3xl bg-white shadow">

          <img
            src={property.image}
            alt={property.title}
            className="h-[450px] w-full object-cover"
          />


          <div className="p-8">

            <h1 className="text-4xl font-bold text-slate-900">
              {property.title}
            </h1>


            <p className="mt-3 text-slate-500">
              📍 {property.location}
            </p>


            <h2 className="mt-6 text-3xl font-extrabold text-cyan-600">
              {property.price}
            </h2>


            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

              <div className="rounded-xl bg-slate-100 p-4">
                🛏 {property.bedroom} Kamar
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                🚿 {property.bathroom} Kamar Mandi
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                🌳 {property.land} m² Tanah
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                🏠 {property.building} m² Bangunan
              </div>

            </div>


            <div className="mt-8 border-t pt-6">

              <h3 className="text-2xl font-bold text-slate-900">
                Deskripsi
              </h3>

              <p className="mt-3 text-slate-600">
                {property.description}
              </p>

            </div>


            <button className="mt-8 rounded-2xl bg-cyan-600 px-8 py-4 font-semibold text-white hover:bg-cyan-700">
              Hubungi Agen
            </button>


          </div>

        </div>

      </div>

    </main>
  );
}
