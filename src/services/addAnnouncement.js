import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addAnnouncement } from "./apiAnnouncement";

export function AddAnnouncement(setFormData) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (formData) => addAnnouncement(formData),
    onSuccess: () => {
      toast.success("New announcement successfully added");
      queryClient.invalidateQueries({
        queryKey: ["announcement"],
      });

      // Reset the form after successful submission
      setFormData({
        about: "",
        location: "",
        date: "",
        time: "",
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return mutate;
}
