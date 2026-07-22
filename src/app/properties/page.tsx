import PropertyHero from "@/components/property/PropertyHero";
import PropertyFilter from "@/components/property/PropertyFilter";
import PropertyToolbar from "@/components/property/PropertyToolbar";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyPagination from "@/components/property/PropertyPagination";

const properties = [
  {
    id: 1,
    title: "Rumah Minimalis Modern",
    location: "Bogor, Jawa Barat",
    price: "Rp 850 Juta",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
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
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    bedroom: 4,
    bathroom: 3,
    land: 300,
    building: 220,
    badge: "Hot",
  },
  {
    id: 3,
    title: "Apartemen Premium",
    location: "Jakarta Selatan",
    price: "Rp 1,4 Miliar",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    bedroom: 2,
    bathroom: 2,
    land: 90,
    building: 90,
    badge: "New",
  },
  {
    id: 4,
    title: "Ruko Strategis",
    location: "Bekasi",
    price: "Rp 2,2 Miliar",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    bedroom: 2,
    bathroom: 2,
    land: 100,
    building: 180,
    badge: "Premium",
  },
];

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <PropertyHero />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[300px_1fr]">

        <aside>
          <PropertyFilter />
        </aside>

        <section>

          <PropertyToolbar
            total={properties.length}
          />

          <div className="mt-6">

            <PropertyGrid
              properties={properties}
            />

          </div>

          <div className="mt-10">

            <PropertyPagination
              currentPage={1}
              totalPages={5}
            />

          </div>

        </section>

      </div>

    </main>
  );
    }
