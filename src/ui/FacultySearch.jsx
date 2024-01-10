// FacultySearch.js
import { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import styled from "styled-components";
import { useEmployees, useSelectedUser } from "../App";
import { useNavigate } from "react-router-dom";

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

const SearchContainer = styled.div`
  input {
    padding: 1rem;
    width: 32.5%;
    border: 1px solid var(--color-grey-200);
    border-radius: 5px;
  }
`;

const Heading = styled.div`
  display: flex;
  column-gap: 2rem;
`;

function FacultySearch() {
  const navigate = useNavigate();
  const { employees } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedEmployee } = useSelectedUser();
  const handleEmployeeClick = (employee) => {
    // Access the data of the clicked employee
    setSelectedEmployee(employee);
    navigate("/inputDeduction");
  };

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContainer>
      <Heading>
        <h1>List of Employees</h1>
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Heading>
      <StyledEmployeeList>
        {/* Display the filtered employees */}
        {filteredEmployees.map((employee) => (
          <EmployeeItem
            employee={employee}
            key={employee.id}
            onItemClick={handleEmployeeClick}
          />
        ))}
      </StyledEmployeeList>
    </SearchContainer>
  );
}

export default FacultySearch;
