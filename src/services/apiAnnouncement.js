import supabase from "./supabase";

export async function getAnnouncements() {
  let { data, error } = await supabase.from("announcement").select("*");

  if (error) {
    console.log("May error");
  }

  return data;
}
