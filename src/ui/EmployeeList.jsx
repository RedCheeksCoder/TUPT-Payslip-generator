import styled from "styled-components";
import EmployeeItem from "./EmployeeItem";
import { useQuery } from "@tanstack/react-query";

const StyledEmployeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 65rem;
  column-gap: 1rem;
  overflow-y: auto;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr;
  }
`;
function EmployeeList() {
  useQuery({
    queryKey: ["employees"],
    queryFn:
  });
  return (
    <>
      <h1>List of Employees</h1>
      <StyledEmployeeList>
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
        <EmployeeItem />
      </StyledEmployeeList>
    </>
  );
}

export default EmployeeList;
