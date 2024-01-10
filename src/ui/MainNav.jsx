import { NavLink } from "react-router-dom";
import { useUser } from "../App";

import { IoIosLogOut } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
import { HiCalendarDays, HiOutlineHome } from "react-icons/hi2";
import { RiLockPasswordLine } from "react-icons/ri";

import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-50);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-primary-900);
  }
`;

const StyledMainNav = styled.nav`
  margin-top: 2rem;
`;
function MainNav() {
  const { userEmail } = useUser();
  return (
    <StyledMainNav>
      <NavList>
        {userEmail === "diane_feria@tup.edu.ph" ? (
          <li>
            <StyledNavLink to="/adminpanel">
              <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
        ) : (
          <li>
            <StyledNavLink to="/payslip">
              <GrDocumentPdf />
              <span>Payslip</span>
            </StyledNavLink>
          </li>
        )}
        <li>
          <StyledNavLink to="/announcement">
            <HiCalendarDays />
            <span>Announcements</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/change-password">
            <RiLockPasswordLine />
            <span>Change Password</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">
            <IoIosLogOut />
            <span>Logout</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledMainNav>
  );
}

export default MainNav;
