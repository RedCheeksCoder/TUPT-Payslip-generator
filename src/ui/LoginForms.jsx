import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import styled from "styled-components";

const LoginFormWrapper = styled.div`
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

const LoginAsUserButton = styled(Button)``; // Inherits styles from Button

const Heading = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 3rem;
  span {
    white-space: nowrap;
  }
`;

const Login = ({ setToken }) => {
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
    console.log(formData.email);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      () => setToken(data);
      navigate("/payslip");

      //   alert('Check your email for verification link')
    } catch (error) {
      console.log(error.message); // Access the error message using 'error.message'
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

export default Login;
