import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getEmployees() {
  let { data, error } = await supabase.from("employees").select("*");

  if (error) {
    toast.error("Error on getting employees.");
  }

  return data;
}

export async function updateEmployees(updatedDeduction, id) {
  console.log(id);
  console.log(updatedDeduction);
  const { data, error } = await supabase
    .from("employees")
    .update(updatedDeduction)
    .eq("id", id);
  if (error) {
    toast.error("Error on updating employees.");
  }

  return data;
}
