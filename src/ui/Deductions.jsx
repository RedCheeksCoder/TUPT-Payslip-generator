import styled from "styled-components";

const StyledDeduction = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 780px) {
    overflow-y: scroll;
  }
`;

const Total = styled.h3`
  font-family: "Poppins";
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  outline: 1px solid var(--color-grey-200);
  color: var(--color-grey-400);
  padding: 1rem;
  span {
    color: var(--color-primary-900);
  }
  @media (max-width: 780px) {
    font-size: 1.5rem;
  }
`;

const Salary = styled.h2`
  font-family: "Poppins";
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 780px) {
    /* flex-direction: column;
    font-size: 1.5rem;
    padding: 0.5rem; */
    display: none;
  }
`;

const Cutoff = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  max-width: 100%;
  color: var(--color-primary-600);
  background-color: var(--color-secondary-700);
  border-radius: var(--border-radius-sm);
`;

const DeductionsCol = styled.div`
  ul {
    display: grid;
    max-height: 70rem;
    overflow-y: auto;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 780px) {
      max-height: 40rem;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    outline: 1px solid var(--color-grey-200);
    padding: 0.5rem;
    cursor: pointer;

    @media (max-width: 1560px) {
      cursor: none;
    }
    @media (max-width: 780px) {
      font-size: 1.5rem;
    }

    &:hover {
      background-color: var(--color-primary-200);
    }
  }
`;
function Deductions() {
  return (
    <StyledDeduction>
      <DeductionsCol>
        <ul>
          <li>
            Ref-sal <span>0.00</span>
          </li>
          <li>
            Ref-PERA/ADA <span>0.00</span>
          </li>
          <li>
            Disallowance <span>0.00</span>
          </li>
          <li>
            W/Tax<span>466.64</span>
          </li>
          <li>
            PhilHealth<span>390.78</span>
          </li>
          <li>
            Life&Ret<span>2344.68</span>
          </li>
          <li>
            GSIS receivables<span>0.00</span>
          </li>
          <li>
            GSIS-Opt. Loan<span>0.00</span>
          </li>
          <li>
            GSIS Restructured<span>0.00</span>
          </li>
          <li>
            Train. Meth. Prog<span>0.00</span>
          </li>
          <li>
            GSIS Sal Loan<span>0.00</span>
          </li>
          <li>
            GSIS-Pol Loan<span>0.00</span>
          </li>
          <li>
            GSIS- Low cost<span>0.00</span>
          </li>
          <li>
            GSIS Emer. Loan<span>0.00</span>
          </li>
          <li>
            GSIS HIP<span>0.00</span>
          </li>
          <li>
            Pagibig MPL<span>0.00</span>
          </li>
          <li>
            Car sticker<span>0.00</span>
          </li>
          <li>
            HDMF Cont<span>100.00</span>
          </li>
          <li>
            Pagibig Emer<span>0.00</span>
          </li>
          <li>
            Dorm<span>0.00</span>
          </li>
          <li>
            Land Bank<span>0.00</span>
          </li>
          <li>
            NHMFC<span>0.00</span>
          </li>
          <li>
            GSIS-Educ Loan<span>0.00</span>
          </li>
          <li>
            GSIS Enhance<span>0.00</span>
          </li>
          <li>
            GSIS Conso Loan<span>0.00</span>
          </li>
          <li>
            MPL-TUP<span>0.00</span>
          </li>
          <li>
            TUPFA<span>2300.00</span>
          </li>
          <li>
            GSIS-E card<span>0.00</span>
          </li>
          <li>
            TUPTEA Hcard<span>0.00</span>
          </li>
          <li>
            HDMF-MP2<span>0.00</span>
          </li>
          <li>
            Coop<span>0.00</span>
          </li>
          <li>
            GSIS Opt. Ins<span>0.00</span>
          </li>
          <li>
            MTIF<span>0.00</span>
          </li>
        </ul>
      </DeductionsCol>
      <Total>
        TOTAL: <span>5602.10</span>
      </Total>
      <Total>
        Net amount due: <span>22449.90</span>
      </Total>
      <Cutoff>
        <Salary>
          1st Half: <span>11224.95</span>
        </Salary>
        <Salary>
          2nd Half: <span>11224.95</span>
        </Salary>
      </Cutoff>
    </StyledDeduction>
  );
}

export default Deductions;
