import styled from "styled-components";
import Deductions from "../ui/Deductions";
import Button from "../ui/Button";
import PrintPdf from "../ui/PrintPdf";
import CurrentUser from "../helper/CurrentUser";

const Container = styled.div`
  max-width: 80%;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  left: 10%;
  grid-template-columns: 100% 1fr;
  @media (max-width: 1560px) {
    grid-template-columns: 100%;
  }
  margin-bottom: 3rem;
`;

const DeductionContainer = styled.div`
  position: relative;
  button {
    margin-top: 2rem;
    position: absolute;
    right: 0;
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 2rem;
    }
    button {
      margin-top: 0;
    }
  }
`;

function Payslip() {
  const employee = CurrentUser();
  console.log(employee);
  function handleClick() {
    PrintPdf(employee);
  }
  return (
    <Container>
      <DeductionContainer>
        <h1>DEDUCTIONS</h1>
        <Deductions employee={employee} />
        <Button variation="primary" size="large" onClick={handleClick}>
          DOWNLOAD PAYSLIP
        </Button>
      </DeductionContainer>
    </Container>
  );
}

export default Payslip;
