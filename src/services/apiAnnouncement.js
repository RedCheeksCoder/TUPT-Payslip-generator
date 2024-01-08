import supabase from "./supabase";

export async function getAnnouncements() {
  let { data, error } = await supabase.from("announcement").select("*");

  if (error) {
    throw new Error(error);
  }
  return data;
}

export async function deleteAnnouncement(id) {
  const { error } = await supabase.from("announcement").delete().eq("id", id);

  if (error) {
    throw new Error(error);
  }
}
