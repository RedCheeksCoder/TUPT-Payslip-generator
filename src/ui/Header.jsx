import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-tertiary-900);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1.2rem 3rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        TUP-Taguig Campus | <span>Payroll payment slip generator</span>
      </h1>
      <h2>Payroll Period: January 2024</h2>
    </StyledHeader>
  );
}

export default Header;
