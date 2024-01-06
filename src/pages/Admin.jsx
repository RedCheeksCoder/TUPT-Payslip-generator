import styled from "styled-components";
import Actions from "../ui/Actions";
import Analytics from "../ui/Analytics";
const StyledAdmin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  max-height: 100rem;
  margin-bottom: 3rem;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Admin() {
  return (
    <StyledAdmin>
      <Actions />
      <Analytics />
    </StyledAdmin>
  );
}

export default Admin;
