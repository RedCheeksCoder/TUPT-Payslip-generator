import styled from "styled-components";

const StyledAnnouncementItem = styled.div`
  margin: 0.2rem;
  border-radius: var(--border-radius-md);
  outline: 1px solid var(--color-grey-400);
  width: fit-content;
  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.div`
  color: var(--color-secondary-800);
  background-color: var(--color-primary-900);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  font-size: 1rem;
  padding: 1rem 2rem;
  font-weight: 600;
`;

const Content = styled.div`
  color: var(--color-grey-900);
  font-size: 1.8rem;
  padding: 1rem;
`;
function AnnouncementItem() {
  return (
    <StyledAnnouncementItem>
      <Title>
        <h1>Mental Health Training</h1>
      </Title>
      <Content>
        <p>Where: Temic room</p>
        <p>When: January 17, 2024</p>
        <p>Note: Bring a notebook</p>
      </Content>
    </StyledAnnouncementItem>
  );
}

export default AnnouncementItem;
