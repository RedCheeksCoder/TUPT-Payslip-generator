import styled from "styled-components";
import AnnouncementItem from "../ui/AnnouncementItem";
import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "../services/apiAnnouncement";
import Spinner from "../ui/Spinner";

const StyledAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 2rem;
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
  const {
    isLoading,
    data: announcements,
    error,
  } = useQuery({
    queryKey: ["announcement"],
    queryFn: getAnnouncements,
  });

  if (isLoading) return <Spinner />;
  if (error) console.log("May Error");
  return (
    <StyledAnnouncement>
      <h1>Announcements</h1>
      <AnnouncementContainer>
        {announcements.map((announcement) => (
          <AnnouncementItem announcement={announcement} key={announcement.id} />
        ))}
      </AnnouncementContainer>
    </StyledAnnouncement>
  );
}

export default Announcement;
