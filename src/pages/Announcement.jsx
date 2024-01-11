import styled from "styled-components";
import AnnouncementItem from "../features/Announcement/AnnouncementItem";
import { useAnnouncement, useUser } from "../App";
import StyledNavlink from "../ui/StyledNavlink";
import { MdOutlineAnnouncement } from "react-icons/md";

const StyledAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 2rem;
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const AnnouncementContainer = styled.div`
  max-height: 60rem;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 1870px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1580px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-height: 50rem;
  }
`;
function Announcement() {
  const { userEmail } = useUser();
  const { announcements } = useAnnouncement();
  return (
    <StyledAnnouncement>
      <h1>Announcements</h1>
      <AnnouncementContainer>
        {announcements.map((announcement) => (
          <AnnouncementItem announcement={announcement} key={announcement.id} />
        ))}
      </AnnouncementContainer>
      {userEmail === "diane_feria@tup.edu.ph" ? (
        <StyledNavlink to="/addAnnouncement">
          <MdOutlineAnnouncement /> Add Announcement
        </StyledNavlink>
      ) : (
        ""
      )}
    </StyledAnnouncement>
  );
}

export default Announcement;
