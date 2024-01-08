import styled from "styled-components";
import Form from "./AnnouncementForm";
import Announcement from "../pages/Announcement";

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
      <Announcement />
    </StyledAddAnnouncement>
  );
}

export default AddAnnouncement;
