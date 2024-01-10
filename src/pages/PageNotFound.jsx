import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-100);
  height: 100dvh;
  img {
    position: fixed;
    bottom: 0;
    height: 45%;
  }
  p {
    font-size: 3rem;
    max-width: 40%;
    font-weight: 500;
    text-align: center;
    color: #a5a4a4;
    @media (max-width: 900px) {
      font-size: 2rem;
      max-width: 70%;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 2rem;
  z-index: 10;
  cursor: pointer;
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
        <h1>404 Page not found</h1>
        <p>
          You must have picked the wrong door because I haven<span>&#39;</span>t
          been able to lay my eye on the page you<span>&#39;</span>ve been
          searching for.
        </p>
        <StyledNavLink to="/login">
          <span>Login</span>
        </StyledNavLink>
        <img src="/sad-dog.png" alt="" />
      </StyledPageNotFound>
    </>
  );
}

export default PageNotFound;
