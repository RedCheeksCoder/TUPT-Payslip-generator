import styled from "styled-components";

const StyledAnnouncementItem = styled.div`
  margin: 0.2rem;
  border-radius: var(--border-radius-md);
  outline: 1px solid var(--color-grey-400);
  width: 25rem;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.div`
  color: var(--color-grey-100);
  background-color: var(--color-primary-800);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 600;
`;

const Content = styled.div`
  color: var(--color-grey-900);
  font-size: 1.5rem;
  padding: 1rem;
`;
function AnnouncementItem({ announcement }) {
  return (
    <StyledAnnouncementItem>
      <Title>
        <h1>{announcement.about}</h1>
      </Title>
      <Content>
        <p>Where: {announcement.location}</p>
        <p>When: {announcement.date}</p>
        <p>Time: {announcement.time}</p>
      </Content>
    </StyledAnnouncementItem>
  );
}

export default AnnouncementItem;
