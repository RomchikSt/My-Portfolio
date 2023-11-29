import styled from "styled-components";
import { Si1Password } from "react-icons/si";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem;
  gap: 3rem;

  h1 {
    font-size: 3rem;
  }

  svg {
    font-size: 4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Si1Password />
      <h1>Password Generator</h1>
    </StyledHeader>
  );
}

export default Header;
