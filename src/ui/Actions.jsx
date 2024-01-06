import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineAnnouncement } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import styled from "styled-components";
import Greet from "./Greet";
import StyledNavlink from "./StyledNavlink";

const StyledActions = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  button {
    height: 5rem;
    width: 25rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Actions() {
  return (
    <Container>
      <Greet />
      <StyledActions>
        <StyledNavlink to="/list">
          <LiaFileInvoiceDollarSolid /> List of Employees
        </StyledNavlink>
        <StyledNavlink to="/addAnnouncement">
          <MdOutlineAnnouncement /> Add Announcement
        </StyledNavlink>
        <StyledNavlink to="/inputDeduction">
          <PiUsersFourLight /> Create Payroll Slip
        </StyledNavlink>
      </StyledActions>
    </Container>
  );
}

export default Actions;
