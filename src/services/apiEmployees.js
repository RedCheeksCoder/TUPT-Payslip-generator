import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getFaculty() {
  let { data, error } = await supabase.from("faculty").select("*");
  if (error) {
    toast.error("Error on getting faculty members.");
  }

  return data;
}

export async function getAdmin() {
  let { data, error } = await supabase.from("admin").select("*");
  if (error) {
    toast.error("Error on getting admin employees.");
  }

  return data;
}

export async function updateEmployees(updatedDeduction, id) {
  const { data, error } = await supabase
    .from("faculty")
    .update(updatedDeduction)
    .eq("id", id);
  if (error) {
    toast.error(
      "Error on updating employees. Please complete all information."
    );
  } else toast.success(`Information has been successfully updated!`);

  return data;
}

export async function updateAdmin(updatedDeduction, id) {
  const { data, error } = await supabase
    .from("admin")
    .update(updatedDeduction)
    .eq("id", id);
  if (error) {
    toast.error(
      "Error on updating employees. Please complete all information."
    );
  } else toast.success(`Information has been successfully updated!`);

  return data;
}
