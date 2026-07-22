import PropertyCard from "./PropertyCard";

interface Property {
  id: number | string;
  title: string;
  location: string;
  price: string;
  image: string;
  bedroom: number;
  bathroom: number;
  land: number;
  building: number;
  badge?: "featured" | "new" | "hot" | "sold" | "rent" | "sale";
}

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({
  properties,
}: PropertyGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {properties.map((property) => (

        <PropertyCard
          key={property.id}
          {...property}
        />

      ))}

    </div>
  );
}
