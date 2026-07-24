import Link from "next/link";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";

import PropertyGallery from "@/components/property/PropertyGallery";
import PropertySummary from "@/components/property/PropertySummary";
import PropertySpecification from "@/components/property/PropertySpecification";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAgentCard from "@/components/property/PropertyAgentCard";
import PropertyMap from "@/components/property/PropertyMap";
import PropertyFacilities from "@/components/property/PropertyFacilities";
import PropertySimilar from "@/components/property/PropertySimilar";
import PropertyStickyContact from "@/components/property/PropertyStickyContact";

export default async function PropertyDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { data: property, error } = await supabase
    .from("properties")
    .select(`
      *,
      property_images(
        image_url,
        sort_order
      )
    `)
    .eq("id", params.id)
    .eq("status", "published")
    .single();

  if (error || !property) {
    notFound();
  }

  const { data: similar } = await supabase
    .from("properties")
    .select(`
      *,
      property_images(
        image_url
      )
    `)
    .eq("status", "published")
    .neq("id", params.id)
    .limit(4);

  const gallery =
    property.property_images?.map(
      (item: any) => item.image_url
    ) ?? [];

  const similarProperties =
    (similar ?? []).map((item: any) => ({
      id: item.id,
      title: item.title,
      location: [
        item.city,
        item.province,
      ]
        .filter(Boolean)
        .join(", "),
      price: item.price
        ? `Rp ${Number(item.price).toLocaleString("id-ID")}`
        : "-",
      image:
        item.property_images?.[0]?.image_url ??
        "/images/no-image.jpg",
      bedroom: Number(item.bedroom ?? 0),
      bathroom: Number(item.bathroom ?? 0),
      land: Number(item.land_area ?? 0),
      building: Number(item.building_area ?? 0),
      badge: "featured",
    }));

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/properties"
          className="mb-6 inline-block text-cyan-600"
        >
          ← Kembali ke Listing
        </Link>

        <PropertyGallery
          images={gallery}
        />

        <PropertySummary
          title={property.title}
          location={[
            property.address,
            property.city,
            property.province,
          ]
            .filter(Boolean)
            .join(", ")}
          price={`Rp ${Number(property.price).toLocaleString("id-ID")}`}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_380px]">

          <div>

            <PropertySpecification
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              land={property.land_area}
              building={property.building_area}
            />

            <PropertyDescription
              description={
                property.ai_description ||
                property.short_description ||
                "-"
              }
            />

            <PropertyMap
              location={[
                property.address,
                property.city,
                property.province,
              ]
                .filter(Boolean)
                .join(", ")}
            />

            <PropertyFacilities
              facilities={
                property.facilities ?? []
              }
            />

          </div>

          <PropertyAgentCard />

        </div>

        <PropertySimilar
          properties={similarProperties}
        />

      </div>

      <PropertyStickyContact />

    </main>
  );
        }
