import styled from "styled-components";
import { useUser } from "../App";

const StyledGreet = styled.h1`
  margin-left: 2rem;
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;
function Greet() {
  const { userEmail } = useUser();
  return (
    <StyledGreet>
      Welcome,{" "}
      {userEmail === "diane_feria@tup.edu.ph" ? "Ma'am Diane!" : "Sir Ken!"}
    </StyledGreet>
  );
}

export default Greet;
