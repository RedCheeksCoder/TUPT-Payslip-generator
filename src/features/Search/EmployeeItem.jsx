import styled from "styled-components";

const StyledEmployeeItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0.3rem 0;
  width: 100%;
  border: 1px solid var(--color-grey-300);
  color: var(--color-primary-900);
  padding: 0.7rem;
  border-radius: var(--border-radius-md);
  font-size: 2rem;
  &:hover {
    background-color: var(--color-secondary-600);
    cursor: pointer;
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

function EmployeeItem({ employee, onItemClick }) {
  const handleItemClick = () => {
    // Trigger the onItemClick callback with the employee data
    onItemClick(employee);
  };
  return (
    <>
      <StyledEmployeeItem onClick={handleItemClick}>
        <p>
          {employee.name}{" "}
          <span>
            <p>{employee.position}</p>
          </span>
        </p>
      </StyledEmployeeItem>
    </>
  );
}

export default EmployeeItem;
