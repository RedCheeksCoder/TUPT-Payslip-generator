import { NavLink } from "react-router-dom";
import { useUser } from "../App";

import { IoIosLogOut } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
import { HiCalendarDays, HiOutlineHome } from "react-icons/hi2";
import { RiLockPasswordLine } from "react-icons/ri";

import styled from "styled-components";

const BottomNavContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  background-color: var(--color-primary-900);
  @media (max-width: 3000px) {
    display: none;
  }
  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    color: var(--color-grey-50);
    font-size: 1.3rem;
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

function BottomNav() {
  const { userEmail } = useUser();
  return (
    <BottomNavContainer>
      <NavList>
        {userEmail === "diane_feria@tup.edu.ph" ? (
          <li>
            <StyledNavLink to="/adminpanel">
              <HiOutlineHome />
            </StyledNavLink>
          </li>
        ) : (
          <li>
            <StyledNavLink to="/payslip">
              <GrDocumentPdf />
            </StyledNavLink>
          </li>
        )}
        <li>
          <StyledNavLink to="/announcement">
            <HiCalendarDays />
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/change-password">
            <RiLockPasswordLine />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">
            <IoIosLogOut />
          </StyledNavLink>
        </li>
      </NavList>
    </BottomNavContainer>
  );
}

export default BottomNav;
