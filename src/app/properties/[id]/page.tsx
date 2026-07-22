import Link from "next/link"; 
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertySummary from "@/components/property/PropertySummary";
import PropertySpecification from "@/components/property/PropertySpecification";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAgentCard from "@/components/property/PropertyAgentCard";

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

        <PropertyGallery />

  <PropertySummary
  price={property.price}
/>

<div className="mt-8 grid gap-8 lg:grid-cols-[2fr_380px]">

  <div>

    <PropertySpecification
      bedroom={property.bedroom}
      bathroom={property.bathroom}
      land={property.land}
      building={property.building}
    />

    <PropertyDescription
      description={property.description}
    />

  </div>

  <PropertyAgentCard />

</div>
</div>
</main>
  );
}
