import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: var(--bg-color-main);
  width: 12rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

function Header() {
  return (
    <StyledHeader>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </StyledHeader>
  );
}

export default Header;
