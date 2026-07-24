import { supabase } from "@/lib/supabase";

export async function uploadPropertyImages(images: File[]) {
  const urls: string[] = [];

  for (const image of images) {
    const fileName = `${Date.now()}-${image.name}`;

    const { error } = await supabase.storage
      .from("property-images")
      .upload(fileName, image);

    if (error) throw error;

    const { data } = supabase.storage
      .from("property-images")
      .getPublicUrl(fileName);

    urls.push(data.publicUrl);
  }

  return urls;
}
