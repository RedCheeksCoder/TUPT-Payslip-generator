import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 35vh;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: transparent;
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
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-600);
    color: whitesmoke;
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

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <FormWrapper>
      <Heading>
        TUP-Taguig <span>Payroll payment slip</span>
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
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
          placeholder="Note"
          name="note"
          value={formData.note}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default Form;
