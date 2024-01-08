import supabase from "./supabase";

export async function getAnnouncements() {
  let { data, error } = await supabase.from("announcement").select("*");

  if (error) {
    throw new Error("Error on getting the announcements ");
  }
  return data;
}

export async function deleteAnnouncement(id) {
  const { error } = await supabase.from("announcement").delete().eq("id", id);

  if (error) {
    throw new Error("Announcement could not be deleted");
  }
}

export async function addAnnouncement(newAnnouncement) {
  const { data, error } = await supabase
    .from("announcement")
    .insert([newAnnouncement])
    .select();
  if (error) {
    throw new Error("Announcement could not be added ");
  }
  return data;
}
