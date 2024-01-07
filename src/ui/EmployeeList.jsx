import styled from "styled-components";
import EmployeeItem from "./EmployeeItem";
import { useEmployees } from "../App";

const StyledEmployeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  max-height: 65rem;
  column-gap: 1rem;
  overflow-y: auto;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr;
  }
`;
function EmployeeList() {
  const { employees } = useEmployees();
  return (
    <>
      <h1>List of Employees</h1>
      <StyledEmployeeList>
        {employees.map((employee) => (
          <EmployeeItem employee={employee} key={employee.id} />
        ))}
      </StyledEmployeeList>
    </>
  );
}

export default EmployeeList;
