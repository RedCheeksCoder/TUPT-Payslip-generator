// EmployeeSearch.js
import { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import styled from "styled-components";
import { useEmployees, useSelectedUser } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

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
  align-items: center;
  column-gap: 2rem;
  @media (max-width: 780px) {
    h1 {
      font-size: 1.5rem;
    }
    input {
      height: 3rem;
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

function EmployeeSearch() {
  const { toDisplay } = useParams();
  const navigate = useNavigate();
  const { faculty, admins } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedEmployee } = useSelectedUser();
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    navigate("/inputDeduction");
  };

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  /* const filteredEmployees = admins.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  const filterEmployeesByRole = (role, searchTerm) => {
    const employees = role === "admin" ? admins : faculty;
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredEmployees = filterEmployeesByRole(toDisplay, searchTerm);

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

export default EmployeeSearch;
