import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  border: 8px solid #0f2a3d;
  border-top: 8px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
  right: 40%;
  top: 42%;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
