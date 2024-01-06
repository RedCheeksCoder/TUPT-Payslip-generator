import styled from "styled-components";
import User from "./User";
import Profile from "./Profile";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-primary-900);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  @media (max-width: 780px) {
    display: none;
  }
`;
function Sidebar() {
  return (
    <StyledSidebar>
      <User />
      <Profile />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
