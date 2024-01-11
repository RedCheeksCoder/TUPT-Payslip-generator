import styled from "styled-components";
import Button from "../../ui/Button";
import { useSelectedUser } from "../../App";

const StyledEmployeeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
function EmployeeButton({ handleSubmit }) {
  const { selectedEmployee } = useSelectedUser();
  return (
    <StyledEmployeeButton>
      <h1></h1>
      <Button variation="primary" size="large" onClick={handleSubmit}>
        Update - {selectedEmployee.name}
      </Button>
    </StyledEmployeeButton>
  );
}

export default EmployeeButton;
