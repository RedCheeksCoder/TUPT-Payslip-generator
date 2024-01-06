import styled from "styled-components";
import LoginForm from "../ui/LoginForm";

const StyledLogin = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgb(15, 42, 61);
  background: linear-gradient(
    90deg,
    rgba(15, 42, 61, 1) 8%,
    rgba(113, 158, 189, 1) 55%
  ); */
`;
function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
