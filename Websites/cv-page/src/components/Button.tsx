import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--border-color);
  height: 5rem;
  width: 18rem;
  border-radius: 1rem;
  color: var(--tx-color1);
  font-size: 1.6rem;
`;

function Button({ children }: { children: string }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
