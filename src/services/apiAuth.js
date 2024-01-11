import toast from "react-hot-toast";
import supabase from "./supabase";

async function Login(formData, setUserEmail, setToken, navigate) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  setUserEmail(data.user.email);

  if (error) toast.error("Username or password is wrong");
  setToken(data);
  toast.success("Login successful!");
  navigate("/announcement");
}

async function ChangePasswordApi(formData, navigate) {
  const { data, error } = await supabase.auth.updateUser({
    password: formData.new_password,
  });
  if (error) {
    toast.error("Username or password is wrong");
  } else
    toast.success(
      "Changing password is successful. You'll be logged out in 3 seconds"
    );
  setTimeout(simulateLogout, 3000);

  function simulateLogout() {
    navigate("/login");
  }
  return data;
}

export { ChangePasswordApi, Login };
