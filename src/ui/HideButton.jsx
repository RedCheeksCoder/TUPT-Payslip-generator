import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const StyleHideButton = styled.button`
  font-size: 1.5rem;
  width: 5rem;
  height: 3rem;
  margin-top: 2rem;
  border-radius: var(--border-radius-sm);
`;
function HideButton({ setHideInfo }) {
  function handleClick() {
    setHideInfo((hideInfo) => !hideInfo);
  }
  return (
    <StyleHideButton onClick={() => handleClick()}>
      <AiOutlineEyeInvisible />
    </StyleHideButton>
  );
}

export default HideButton;
