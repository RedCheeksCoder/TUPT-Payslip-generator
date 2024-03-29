import { useState } from "react";
import styled from "styled-components";
import { ChangePasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StyledChangePassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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

const LoginAsUserButton = styled(Button)`
  background-color: var(--color-primary-500);
  color: white;
`; // Inherits styles from Button

const Heading = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 3rem;
  span {
    white-space: nowrap;
  }
`;

const FormWrapper = styled.div`
  padding: 2rem;
  height: 25rem;
  width: 50rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: transparent;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 500px) {
    height: 30rem;
    font-size: 1.5rem;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;

function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    new_password: "",
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  if (!formData) {
    toast.error("Please complete all information correctly.");
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    ChangePasswordApi(formData, navigate);
  }
  return (
    <StyledChangePassword>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Heading>Change Password</Heading>
          <Input
            placeholder="New password"
            name="email"
            type="password"
            onChange={handleChange}
          />
          <Input
            placeholder="Confirm New Password"
            name="new_password"
            type="password"
            onChange={handleChange}
          />
          <LoginAsUserButton>Submit</LoginAsUserButton>
        </form>
      </FormWrapper>
    </StyledChangePassword>
  );
}

export default ChangePassword;
