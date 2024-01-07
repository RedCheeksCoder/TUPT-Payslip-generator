import styled from "styled-components";
import HideButton from "./HideButton";
import Position from "./Position";
import Salary from "./Salary";
import { useState } from "react";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-800);
  padding: 0 1rem 1rem 1rem;
  border-radius: var(--border-radius-md);
`;
function Profile({
  employeeNum,
  salaryGrade,
  step,
  salary,
  pera,
  grossAmount,
}) {
  const [hideInfo, setHideInfo] = useState(true);
  return (
    <StyledProfile>
      <Position
        employeeNum={employeeNum}
        salaryGrade={salaryGrade}
        step={step}
      />
      <Salary
        hideInfo={hideInfo}
        salary={salary}
        pera={pera}
        grossAmount={grossAmount}
      />
      <HideButton setHideInfo={setHideInfo} hideInfo={hideInfo} />
    </StyledProfile>
  );
}

export default Profile;
