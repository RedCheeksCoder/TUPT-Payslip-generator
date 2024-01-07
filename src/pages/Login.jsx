import styled from "styled-components";
import LoginForms from "../ui/LoginForms";
const StyledLogin = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Login() {
  return (
    <StyledLogin>
      <LoginForms />
    </StyledLogin>
  );
}

export default Login;
