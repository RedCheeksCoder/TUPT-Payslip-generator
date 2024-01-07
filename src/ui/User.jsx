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
function User({ name, position }) {
  return (
    <StyledUser>
      <img
        src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/362616571_6912352918776361_5796964076088210062_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFI50iJB_rdSI7HK-xAZHskg5QbzTTaIS6DlBvNNNohLoy0x4m7xpacSncVAI-F6MhHjiF_ZHswGXS5hMJsxs86&_nc_ohc=3DUdZwOm42UAX_zNSBk&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfAjsjrkOZu8mEp7woshr79WRBZFis4cAkZjq2a8LkaxyA&oe=65A071C6"
        alt=""
      />
      <b>{name}</b>
      <p>{position}</p>
    </StyledUser>
  );
}

export default User;
