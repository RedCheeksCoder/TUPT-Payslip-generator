import styled from "styled-components";
import { useAnnouncement } from "../App";

const StyledAnalytics = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
  width: auto;
  @media (max-width: 780px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const AnalyticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const DownloadAnalytics = styled.div`
  background-color: var(--color-secondary-200);
  text-align: center;
  width: 25rem;
  height: 100%;
  padding: 2rem;
  border-radius: var(--border-radius-md);
  p {
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 1500px) {
    height: auto;
  }
  @media (max-width: 780px) {
    p {
      font-size: 1.3rem;
    }
    font-size: 1rem;
    width: 16rem;
  }
`;

const AnnouncementAnalytics = styled(DownloadAnalytics)`
  background-color: #8484df;
`;
const CommitmentAnalytics = styled(DownloadAnalytics)`
  background-color: #cd84df;
`;
const RenewalAnalytics = styled(DownloadAnalytics)`
  background-color: #d9df84;
`;

function Analytics() {
  const { announcements } = useAnnouncement();
  const count = Object.keys(announcements).length;
  return (
    <StyledAnalytics>
      <h1>Analytics</h1>
      <AnalyticsContainer>
        <AnnouncementAnalytics>
          <h1>{count}</h1>
          <p>Announcement Posted</p>
        </AnnouncementAnalytics>
        <DownloadAnalytics>
          <h1>75/95</h1>
          <p>Total Downloads for this month</p>
        </DownloadAnalytics>
        <CommitmentAnalytics>
          <h1>68/95</h1>
          <p>Number of going to the Mental health training</p>
        </CommitmentAnalytics>
        <RenewalAnalytics>
          <h1>23/34</h1>
          <p>Number of renewed Instructors with complete documents</p>
        </RenewalAnalytics>
      </AnalyticsContainer>
    </StyledAnalytics>
  );
}

export default Analytics;
