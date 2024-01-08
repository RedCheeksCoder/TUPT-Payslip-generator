import styled from "styled-components";

const StyledPosition = styled.div`
  color: var(--text-color);
  font-size: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  p {
    display: flex;
    justify-content: space-between;
  }
  b {
    font-size: 1.4rem;
  }
`;
function Position({ employeeNum, salaryGrade, step }) {
  return (
    <StyledPosition>
      <p>
        <span>Employee Number:</span> <b>{employeeNum}</b>
      </p>
      <p>
        <span>Salary grade/Step:</span> <b>{`${salaryGrade} - ${step}`}</b>
      </p>
    </StyledPosition>
  );
}

export default Position;
