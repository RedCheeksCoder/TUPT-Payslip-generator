import styled from "styled-components";
import PayrollMonth from "./PayrollMonth";

const StyledHeader = styled.header`
  background-color: var(--color-tertiary-700);
  padding: 1.2rem 4.8rem;
  color: var(--color-primary-900);
  border-bottom: 1px solid var(--color-grey-100);
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 1.2rem 3rem;
  }
  h2 {
    color: var(--color-grey-200);
  }
`;

function Header() {
  const { currentMonth, currentYear } = PayrollMonth();
  return (
    <StyledHeader>
      <h1>
        TUP-Taguig Campus | <span>Payroll payment slip generator</span>
      </h1>
      <h2>
        Payroll Period: {currentMonth} {currentYear}
      </h2>
    </StyledHeader>
  );
}

export default Header;
