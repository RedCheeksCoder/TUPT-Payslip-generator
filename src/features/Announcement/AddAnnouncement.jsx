import styled from "styled-components";
import Announcement from "../../pages/Announcement";
import AddAnnouncementForm from "./AddAnnouncementForm";

const StyledAddAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function AddAnnouncement() {
  return (
    <StyledAddAnnouncement>
      <AddAnnouncementForm />
      <Announcement />
    </StyledAddAnnouncement>
  );
}

export default AddAnnouncement;
