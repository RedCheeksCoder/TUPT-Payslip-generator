import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledPageNotFound = styled.div`
  background-color: var(--color-grey-100);
  height: 100dvh;

  img {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }
  h1 {
    position: absolute;
    top: 20rem;
    left: 50rem;
    max-width: 55%;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 37rem;
  left: 50rem;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-primary-900);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    background-color: var(--color-secondary-900);
    border-radius: 5px;
  }
`;
function PageNotFound() {
  return (
    <>
      <StyledPageNotFound>
        <img src="/sad-dog-head-only.png" alt="" />
        <h1>
          404 Page not found <br />
          You must have picked the wrong door because I haven<span>&#39;</span>t
          been able to lay my eye on the page you<span>&#39;</span>ve been
          searching for.
        </h1>
        <StyledNavLink to="/payslip">
          <span>Home</span>
        </StyledNavLink>
      </StyledPageNotFound>
    </>
  );
}

export default PageNotFound;
