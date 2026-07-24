"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import PropertyHero from "@/components/property/PropertyHero";
import PropertyFilter from "@/components/property/PropertyFilter";
import PropertyToolbar from "@/components/property/PropertyToolbar";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyPagination from "@/components/property/PropertyPagination";
import PropertyExplorerMap from "@/components/property/PropertyExplorerMap";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  bedroom: number;
  bathroom: number;
  land: number;
  building: number;
  latitude: number;
  longitude: number;
  badge?: "featured" | "new" | "hot" | "sold" | "rent" | "sale";
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select(`
          *,
          property_images(
            image_url,
            sort_order
          )
        `)
        .eq("status", "published")
        .order("published_at", {
          ascending: false,
        });

      if (error) throw error;

      const result: Property[] =
        (data ?? []).map((item: any) => ({
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

          latitude: Number(item.latitude ?? 0),

          longitude: Number(item.longitude ?? 0),
          
          badge: "featured",
        }));

      setProperties(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <PropertyHero />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[300px_1fr]">

        <aside>
          <PropertyFilter />
        </aside>

        <section>

          <PropertyExplorerMap
  properties={properties}
/>
          
          <PropertyToolbar
            total={properties.length}
          />

          <div className="mt-6">

            {loading ? (

              <div className="rounded-3xl bg-white p-12 text-center shadow">
                Memuat data properti...
              </div>

            ) : (

              <PropertyGrid
                properties={properties}
              />

            )}

          </div>

          <div className="mt-10">

            <PropertyPagination
              currentPage={1}
              totalPages={1}
            />

          </div>

        </section>

      </div>

    </main>
  );
}
