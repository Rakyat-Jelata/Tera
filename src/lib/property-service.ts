import { supabase } from "./supabase";

export async function getFeaturedProperties(limit = 6) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data;
}

export async function getLatestProperties(limit = 8) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data;
}
