import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { supabase } from './supabase'; // sesuaikan jika namanya supabaseClient

export async function uploadPropertyImage(file: File) {
  try {
    // 1. Buat nama file unik agar tidak bentrok (misal: timestamp-namagambar.jpg)
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `properties/${fileName}`;

    // 2. Upload file ke bucket 'property-images'
    const { data, error } = await supabase.storage
      .from('property-images') // sesuaikan nama bucket yang kamu buat
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // 3. Ambil Public URL gambar untuk disimpan di database
    const { data: publicUrlData } = supabase.storage
      .from('property-images')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl; // URL ini yang disimpan ke kolom image_url di database
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}
