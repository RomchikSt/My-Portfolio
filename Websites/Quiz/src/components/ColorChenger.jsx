import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const IconWrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1000;

  svg {
    fill: var(--tx-color);
    height: 2.2rem;
    width: 2.2rem;
    margin: 1rem;
  }
`;

function ColorChenger() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconWrapper onClick={toggleDarkMode}>
      {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
    </IconWrapper>
  );
}

export default ColorChenger;
