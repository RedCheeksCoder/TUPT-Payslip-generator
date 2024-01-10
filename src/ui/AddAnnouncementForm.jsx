import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { addAnnouncement } from "../services/apiAnnouncement";
import toast from "react-hot-toast";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 40vh;
  width: 35vh;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: transparent;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 80%;
  margin: 10px;
  padding: 8px;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  background: transparent;
`;

const Button = styled.button`
  width: 80%;
  margin: 5px;
  padding: 10px;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  background-color: var(--color-primary-600);
  color: whitesmoke;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-900);
  }
`;

const Heading = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 3rem;
  span {
    white-space: nowrap;
  }
`;

const AddAnnouncementForm = () => {
  const [formData, setFormData] = useState({
    about: "",
    location: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <FormWrapper>
      <Heading>Add announcement form</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <Input
          type="date"
          placeholder="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default AddAnnouncementForm;
