import { ImArrowRight } from "react-icons/im";
import { ImArrowLeft } from "react-icons/im";
import styled from "styled-components";
import Button from "./Button";

const StyledEmployeeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  font-size: 2rem;
  gap: 3rem;
  width: 50%;
  margin-top: 1rem;
  svg {
    color: var(--color-secondary-900);
    cursor: pointer;
    font-size: 3rem;
  }
  @media (max-width: 1130px) {
    margin-top: 3rem;
    font-size: 2rem;
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-top: 3rem;
    font-size: 1.5rem;
    width: 100%;
  }
`;
function EmployeeButton() {
  return (
    <StyledEmployeeButton>
      <ImArrowLeft />
      <Button variation="primary" size="large">
        Update
      </Button>
      <ImArrowRight />
    </StyledEmployeeButton>
  );
}

export default EmployeeButton;
