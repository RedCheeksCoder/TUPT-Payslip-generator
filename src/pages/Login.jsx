import styled from "styled-components";
import LoginForms from "../features/Login/LoginForms";
const StyledLogin = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Login({ setUserEmail, setToken }) {
  return (
    <StyledLogin>
      <LoginForms setUserEmail={setUserEmail} setToken={setToken} />
    </StyledLogin>
  );
}

export default Login;
