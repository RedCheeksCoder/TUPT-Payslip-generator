import styled from "styled-components";
import Deductions from "../ui/Deductions";
import Button from "../ui/Button";

const Container = styled.div`
  padding-left: 2rem;
  max-width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 70% 1fr;
  @media (max-width: 1560px) {
    grid-template-columns: 100%;
  }
  margin-bottom: 3rem;
`;

const Description = styled.div`
  padding: 0 3rem;
  p {
    font-size: 2rem;
    color: var(--color-primary-900);
    border-radius: var(--border-radius-md);
    margin-top: 1rem;
    line-height: 1.67;
  }

  @media (max-width: 1560px) {
    display: none;
  }
`;

const DeductionContainer = styled.div`
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
  return (
    <Container>
      <DeductionContainer>
        <h1>DEDUCTIONS</h1>

        <Deductions />

        <Button variation="primary" size="large">
          DOWNLOAD PAYSLIP
        </Button>
      </DeductionContainer>
      <Description>
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quia
          illo excepturi provident inventore dolorem dolor voluptate aliquam eum
          natus, eius explicabo dolores ipsa et pariatur voluptatem ex sit quasi
          id vero placeat ea laboriosam aliquid? Unde maxime, voluptate
          perspiciatis iusto obcaecati, nobis nemo nesciunt aperiam natus
          delectus, odio voluptas?
        </p>
      </Description>
    </Container>
  );
}

export default Payslip;
