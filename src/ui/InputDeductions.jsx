import styled from "styled-components";
import EmployeeButton from "./EmployeeButton";

const StyledDeduction = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  width: 80%;
  margin-bottom: 2rem;
  position: relative;
  left: 10%;

  h1,
  button {
    font-family: "Poppins";
  }

  h1 {
    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
`;

const InputDeductionsCol = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 0.5rem;
    margin-bottom: 2rem;
    max-height: 50rem;
    overflow-y: auto;

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    ::-webkit-scrollbar {
      display: none;
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

    &:hover {
      background-color: var(--color-secondary-600);
      outline: none;
    }

    input {
      width: 10rem;
      border: 0;
      border-radius: 5px;
      display: block;
      direction: rtl;
      padding-right: 1rem;
      &:focus {
        background-color: var(--color-secondary-900);
        color: var(--color-primary-900);
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
`;

const InputTotal = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
  margin-bottom: 2rem;
  gap: 2rem;
  label {
    font-weight: 600;
  }
  input {
    border: 1px solid var(--color-grey-200);
    width: 100%;
    height: auto;
    direction: rtl;
  }
`;
function InputDeductions() {
  return (
    <StyledDeduction>
      <h1>Input deductions</h1>
      <InputDeductionsCol>
        <ul>
          <li>
            Ref-sal{" "}
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Ref-PERA/ADA{" "}
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Disallowance{" "}
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            W/Tax
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            PhilHealth
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Life&Ret
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS receivables
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS-Opt. Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Restructured
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Train. Meth. Prog
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Sal Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS-Pol Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS- Low cost
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Emer. Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS HIP
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Pagibig MPL
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Car sticker
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            HDMF Cont
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Pagibig Emer
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Dorm
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Land Bank
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            NHMFC
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS-Educ Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Enhance
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Conso Loan
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            MPL-TUP
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            TUPFA
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS-E card
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            TUPTEA Hcard
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            HDMF-MP2
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            Coop
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            GSIS Opt. Ins
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
          <li>
            MTIF
            <span>
              <input type="number" placeholder="0.00" required />
            </span>
          </li>
        </ul>
      </InputDeductionsCol>

      <>
        <InputTotal>
          <li>
            <label>
              Total Deductions:
              <input type="number" placeholder="0.00" required />
            </label>
          </li>
          <li>
            <label>
              Net amount due:
              <input type="number" placeholder="0.00" required />
            </label>
          </li>
          <li>
            <label>
              First Half:
              <input type="number" placeholder="0.00" required />
            </label>
          </li>
          <li>
            <label>
              Second Half:
              <input type="number" placeholder="0.00" required />
            </label>
          </li>
        </InputTotal>
      </>
      <Buttons>
        <EmployeeButton />
      </Buttons>
    </StyledDeduction>
  );
}

export default InputDeductions;
