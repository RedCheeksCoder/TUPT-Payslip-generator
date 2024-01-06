import styled from "styled-components";

const StyledGreet = styled.h1`
  margin-left: 2rem;
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;
function Greet() {
  return (
    <StyledGreet>
      Welcome, Ma<span>&#39;</span>am Dianne!
    </StyledGreet>
  );
}

export default Greet;
