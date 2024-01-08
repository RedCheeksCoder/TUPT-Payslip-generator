import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import styled from "styled-components";
import toast from "react-hot-toast";

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 40vh;
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
  a {
    color: var(--color-grey-400);
    margin-top: 1rem;
    &:hover {
      transition: text-shadow 0.3s ease;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
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

const LoginForms = ({ setToken, setUserEmail }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      setUserEmail(data.user.email);

      if (error) throw error;
      setToken(data);
      toast.success("Login successful!");
      navigate("/announcement");

      //   alert('Check your email for verification link')
    } catch (error) {
      toast.error("Username or password is wrong"); // Access the error message using 'error.message'
    }
  }

  return (
    <LoginFormWrapper>
      <form onSubmit={handleSubmit}>
        <Heading>
          TUP-Taguig <span>Payroll payment slip</span>
        </Heading>
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <LoginAsUserButton>Login</LoginAsUserButton>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForms;
