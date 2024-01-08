/* import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import supabase from "../services/supabase";

const StyledChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

function ChangePassword() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    new_password: "",
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

      toast.success("Login successful!");
      navigate("/announcement");

      //   alert('Check your email for verification link')
    } catch (error) {
      toast.error("Username or password is wrong"); // Access the error message using 'error.message'
    }
  }
  return (
    <StyledChangePassword>                                                 
      <form onSubmit={handleSubmit}>
        <Heading>
          TUP-Taguig <span>Payroll payment slip</span>
        </Heading>
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input
          placeholder="New Password"
          name="new_password"
          type="password"
          onChange={handleChange}
        />
        <LoginAsUserButton>Submit</LoginAsUserButton>
      </form>
    </StyledChangePassword>
  );
}

export default ChangePassword;
 */
