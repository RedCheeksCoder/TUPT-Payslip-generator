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
`;
function Position() {
  return (
    <StyledPosition>
      <p>
        <span>Employee Number:</span> <b>INST1-0123</b>
      </p>
      <p>
        <span>Salary grade/Step:</span> <b>12 - 1</b>
      </p>
    </StyledPosition>
  );
}

export default Position;
