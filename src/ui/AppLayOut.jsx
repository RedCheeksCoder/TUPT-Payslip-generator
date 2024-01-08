import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayOut = styled.div`
  display: grid;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 4.8rem 6.4rem;
  @media (max-width: 780px) {
    padding: 2rem 1rem 6.4rem;
  }
`;



function AppLayOut({ token }) {
  return (
    <StyledAppLayOut >
      <Header />
      <Sidebar token={token} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayOut>
  );
}

export default AppLayOut;
