import styled from "styled-components";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const StyledHeader = styled.div`
  background-color: var(--bg-color-main);
  width: 12rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const StyledList = styled.ul`
  position: relative;
  color: var(--tx-color1);
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;

  li {
    padding: 1.6rem;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--tx-color1);
  }
`;

const StyledLogos = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem;
  font-size: 2rem;
  color: var(--tx-color1);
  bottom: 3rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledList>
        <li>
          <StyledButton>Home</StyledButton>
        </li>
        <li>
          <StyledButton>About</StyledButton>
        </li>
        <li>
          <StyledButton>Portfolio</StyledButton>
        </li>
        <li>
          <StyledButton>Contact</StyledButton>
        </li>
      </StyledList>
      <StyledLogos>
        <StyledButton>
          <FaLinkedin />
        </StyledButton>
        <StyledButton>
          <FaGithub />
        </StyledButton>
        <StyledButton>
          <FaInstagram />
        </StyledButton>
      </StyledLogos>
    </StyledHeader>
  );
}

export default Header;
