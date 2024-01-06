import styled from "styled-components";

const StyledSalary = styled.div`
  font-size: 1.5rem;
  color: var(--text-color);
  width: 100%;
  margin-top: 1.5rem;
  p {
    display: flex;
    justify-content: space-between;
  }
  button {
    color: var(--color-tertiary-700);
    padding: 0.7rem 2rem;
  }
`;
function Salary({ hideInfo }) {
  return (
    <StyledSalary>
      <p>
        <span>Monthly Salary: </span>
        <b>{`${hideInfo ? "*****" : "26,052"} PHP`}</b>
      </p>
      <p>
        <span>P.E.R.A.: </span>
        <b>{`${hideInfo ? "*****" : "2,000"} PHP`}</b>
      </p>
      <p>
        <span>AdCom: </span>
        <b>{`${hideInfo ? "*****" : "3,000"} PHP`}</b>
      </p>
      <hr />
      <p>
        <span>Gross Amount Due: </span>
        <b>{`${hideInfo ? "*****" : "31,052"} PHP`}</b>
      </p>
    </StyledSalary>
  );
}

export default Salary;
