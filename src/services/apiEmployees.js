import supabase from "./supabase";

export async function getEmployees() {
  let { data, error } = await supabase.from("employees").select("*");

  if (error) {
    console.log("May error");
  }

  return data;
}
