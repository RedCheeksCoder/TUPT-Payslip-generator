import styled from "styled-components";
const StyledUser = styled.div`
  text-align: center;
  margin-top: 5rem;
  b {
    font-size: 2rem;
    display: block;
    color: var(--text-color);
  }
  p {
    font-size: 1.4rem;
    color: var(--lighter-text-color);
  }
  img {
    height: 10rem;
  }
  margin-bottom: 2rem;
`;
function User({ name, position }) {
  return (
    <StyledUser>
      <img src="/Blank-profile.png" alt="" />
      <b>{name}</b>
      <p>{position}</p>
    </StyledUser>
  );
}

export default User;
