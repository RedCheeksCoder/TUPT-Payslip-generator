import styled from "styled-components";
import Form from "./AnnouncementForm";

const StyledAddAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function AddAnnouncement() {
  return (
    <StyledAddAnnouncement>
      <Form />
    </StyledAddAnnouncement>
  );
}

export default AddAnnouncement;
