import styled from "styled-components";
import User from "./User";
import Profile from "./Profile";
import MainNav from "./MainNav";
import CurrentUser from "../helper/CurrentUser";
import { useUser } from "../App";
const StyledSidebar = styled.aside`
  background-color: var(--color-primary-900);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / 999;
  @media (max-width: 780px) {
    display: none;
  }
`;
function Sidebar() {
  const { userEmail } = useUser();
  const employee = CurrentUser();
  return (
    <StyledSidebar>
      <User
        name={employee.name}
        position={employee.position}
        id={employee.id}
      />
      {userEmail !== "diane_feria@tup.edu.ph" ? (
        <Profile
          employeeNum={employee.employeeNum}
          salaryGrade={employee.salaryGrade}
          step={employee.step}
          salary={employee.salary}
          pera={employee.pera}
          grossAmount={employee.grossAmount}
          email={employee.email}
        />
      ) : (
        ""
      )}

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
