import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: var(--color-primary-50);
  background-color: var(--color-primary-600);
  font-size: 1.6rem;
  padding: 1.2rem 4.4rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  &:hover {
    background-color: var(--color-primary-700);
  }
`;
function StyledNavlink({ children, to }) {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
}

export default StyledNavlink;
