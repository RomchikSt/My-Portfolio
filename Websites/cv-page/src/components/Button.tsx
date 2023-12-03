import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid var(--border-color);
  height: 5rem;
  width: 18rem;
  border-radius: 1rem;
  color: var(--tx-color1);
`;

function Button({ children }: { children: string }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
