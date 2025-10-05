import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function uploadImage(file) {
  const filePath = `cars/${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("car-images")
    .upload(filePath, file);

  if (error) throw error;
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${filePath}`;
}
