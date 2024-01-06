import styled from "styled-components";

const StyledUser = styled.div`
  text-align: center;
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
function User() {
  return (
    <StyledUser>
      <img src="/Blank-profile.png" alt="" />
      <b>ODIÑA, John Bryan</b>
      <p>Instructror 1</p>
    </StyledUser>
  );
}

export default User;
