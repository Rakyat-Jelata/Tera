import { supabase } from "@/lib/supabase";

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
