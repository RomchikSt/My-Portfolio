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

const StyledList = styled.ul`
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

function Header() {
  return (
    <StyledHeader>
      <StyledList>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </StyledList>
    </StyledHeader>
  );
}

export default Header;
