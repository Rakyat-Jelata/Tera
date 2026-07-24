import { supabase } from "@/lib/supabase";

/* ===========================
   SIMPAN DRAFT
=========================== */
export async function saveDraft(formData: any) {
  const { data, error } = await supabase
    .from("properties")
    .insert([
      {
        title: formData.title,
        category: formData.category,
        property_type: formData.propertyType,
        transaction: formData.transaction,

        province: formData.province,
        city: formData.city,
        district: formData.district,
        village: formData.village,
        address: formData.address,

        land_area: formData.landArea,
        building_area: formData.buildingArea,
        bedroom: formData.bedroom,
        bathroom: formData.bathroom,
        floor: formData.floor,

        legal: formData.legal,
        building_condition: formData.buildingCondition,

        price: formData.price,
        price_per_meter: formData.pricePerMeter,
        negotiable: formData.negotiable,

        facilities: formData.facilities,

        seo_title: formData.seoTitle,
        seo_description: formData.seoDescription,
        seo_keywords: formData.seoKeywords,

        ai_description: formData.aiDescription,

        status: "draft",
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}

/* ===========================
   SIMPAN FOTO
=========================== */

export async function savePropertyImages(
  propertyId: string,
  imageUrls: string[]
) {
  const rows = imageUrls.map((url, index) => ({
    property_id: propertyId,
    image_url: url,
    sort_order: index + 1,
  }));

  const { error } = await supabase
    .from("property_images")
    .insert(rows);

  if (error) throw error;
}

/* ===========================
   PUBLISH
=========================== */

export async function publishProperty(id: string) {
  const { data, error } = await supabase
    .from("properties")
    .update({
      status: "published",
      published_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

/* ===========================
   HAPUS LISTING
=========================== */

export async function deleteProperty(id: string) {

  const { data: images } = await supabase
    .from("property_images")
    .select("image_url")
    .eq("property_id", id);

  if (images && images.length > 0) {

    const files = images
      .map((img) => {

        const parts = img.image_url.split("/property-images/");

        return parts[1];

      })
      .filter(Boolean);

    if (files.length > 0) {
      await supabase.storage
        .from("property-images")
        .remove(files);
    }

    await supabase
      .from("property_images")
      .delete()
      .eq("property_id", id);

  }

  const { error } = await supabase
    .from("properties")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
