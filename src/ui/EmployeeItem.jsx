import Button from "./Button";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const StyledEmployeeItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem 0;
  width: 100%;
  border: 1px solid var(--color-grey-300);
  color: var(--color-primary-900);
  padding: 0.7rem;
  border-radius: var(--border-radius-md);
  font-size: 2rem;
  &:hover {
    background-color: var(--color-secondary-600);
  }
  span {
    font-size: 1.3rem;
    color: var(--color-grey-400);
  }

  @media (max-width: 1400px) {
    width: 70%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const ActionButton = styled.div`
  display: flex;
  gap: 0.3rem;
  button {
    &:hover {
      background-color: var(--color-primary-600);
      color: whitesmoke;
    }
  }
`;
function EmployeeItem({ employee }) {
  return (
    <StyledEmployeeItem>
      <p>
        {employee.name}{" "}
        <span>
          <p>{employee.position}</p>
        </span>
      </p>

      <ActionButton>
        <Button variation="secondary" size="small">
          {" "}
          <MdModeEditOutline />
        </Button>
        <Button variation="secondary" size="small">
          {" "}
          <FaTrashAlt />
        </Button>
      </ActionButton>
    </StyledEmployeeItem>
  );
}

export default EmployeeItem;
