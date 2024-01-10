import styled from "styled-components";

const StyledDeduction = styled.div`
  font-family: "Poppins";
  font-size: 1.8rem;
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
    margin-left: 1rem;
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
  margin-top: 1rem;
  font-size: 1.5rem;
  max-width: 100%;
  color: var(--color-primary-600);
  background-color: var(--color-secondary-700);
  border-radius: var(--border-radius-sm);
  span {
    margin-left: 1rem;
  }
`;

const DeductionsCol = styled.div`
  margin-bottom: 1rem;
  ul {
    display: grid;
    max-height: 70rem;
    overflow-y: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.3rem 2rem;
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
    border-radius: 5px;
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
      color: whitesmoke;
    }
  }
`;
function Deductions({ employee }) {
  return (
    <StyledDeduction>
      <DeductionsCol>
        <ul>
          <li>
            Ref-sal <span>{employee.refSal}</span>
          </li>
          <li>
            Ref-PERA/ADA <span>{employee.refPeraAda}</span>
          </li>
          <li>
            Disallowance <span>{employee.disallowance}</span>
          </li>
          <li>
            W/Tax<span>{employee.wTax}</span>
          </li>
          <li>
            PhilHealth<span>{employee.philHealth}</span>
          </li>
          <li>
            Life&Ret<span>{employee.lifeAndRetirement}</span>
          </li>
          <li>
            GSIS receivables<span>{employee.gsisReceivables}</span>
          </li>
          <li>
            GSIS-Opt. Loan<span>{employee.gsisOptLoan}</span>
          </li>
          <li>
            GSIS Restructured<span>{employee.gsisRestructured}</span>
          </li>
          <li>
            Train. Meth. Prog<span>{employee.trainMethProg}</span>
          </li>
          <li>
            GSIS Sal Loan<span>{employee.gsisSalLoan}</span>
          </li>
          <li>
            GSIS-Pol Loan<span>{employee.gsisPolLoan}</span>
          </li>
          <li>
            GSIS- Low cost<span>{employee.gsisLowCost}</span>
          </li>
          <li>
            GSIS Emer. Loan<span>{employee.gsisEmerLoan}</span>
          </li>
          <li>
            GSIS HIP<span>{employee.gsisHip}</span>
          </li>
          <li>
            Pagibig MPL<span>{employee.pagibigMpl}</span>
          </li>
          <li>
            Car sticker<span>{employee.carSticker}</span>
          </li>
          <li>
            HDMF Cont<span>{employee.hdmfCont}</span>
          </li>
          <li>
            Pagibig Emer<span>{employee.pagibigEmer}</span>
          </li>
          <li>
            Dorm<span>{employee.dorm}</span>
          </li>
          <li>
            Land Bank<span>{employee.landbank}</span>
          </li>
          <li>
            NHMFC<span>{employee.nhmfc}</span>
          </li>
          <li>
            GSIS-Educ Loan<span>{employee.gsisEducLoan}</span>
          </li>
          <li>
            GSIS Enhance<span>{employee.gsisEnhanced}</span>
          </li>
          <li>
            GSIS Conso Loan<span>{employee.gsisConsoLoan}</span>
          </li>
          <li>
            MPL-TUP<span>{employee.mplTup}</span>
          </li>
          <li>
            TUPFA<span>{employee.tupfa}</span>
          </li>
          <li>
            GSIS-E card<span>{employee.gsisEcard}</span>
          </li>
          <li>
            TUPTEA Hcard<span>{employee.tupteaHcard}</span>
          </li>
          <li>
            HDMF-MP2<span>{employee.hdmfMp2}</span>
          </li>
          <li>
            Coop<span>{employee.coop}</span>
          </li>
          <li>
            GSIS Opt. Ins<span>{employee.gsisOpsIns}</span>
          </li>
          <li>
            MTIF<span>{employee.mtif}</span>
          </li>
        </ul>
      </DeductionsCol>
      <Total>
        TOTAL: <span>{employee.total}</span>
      </Total>
      <Total>
        Net amount due: <span>{employee.netAmountDue}</span>
      </Total>
      <Cutoff>
        <Salary>
          1st Half: <span>{employee.firstHalf}</span>
        </Salary>
        <Salary>
          2nd Half: <span>{employee.secondHalf}</span>
        </Salary>
      </Cutoff>
    </StyledDeduction>
  );
}

export default Deductions;
