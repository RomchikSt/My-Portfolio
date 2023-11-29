import styled from "styled-components";

const StyledButton = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: inherit;
  color: var(--tx-color);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  border-radius: 4rem;
  transition: scale 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: ${(props) => props.$width || "10rem"};
  height: ${(props) => props.$height || "5rem"};
  gap: ${(props) => props.$gap || "0"};
  background: ${(props) => props.$backgroundColor || "inherit"};
  visibility: ${(props) => props.$visibility || "visible"};

  svg {
    width: 3rem;
    height: 3rem;
    fill: var(--tx-color);
  }

  &:hover {
    scale: ${(props) => (props.disabled ? "1" : "1.05")};
  }

  &:active {
    scale: ${(props) => (props.disabled ? "1" : "1.02")};
  }
`;

function Button({
  $width,
  $height,
  $gap,
  children,
  onClick,
  $backgroundColor,
  disabled,
  $visibility,
}) {
  return (
    <StyledButton
      $width={$width}
      $height={$height}
      $gap={$gap}
      onClick={onClick}
      $backgroundColor={$backgroundColor}
      disabled={disabled}
      $visibility={$visibility}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
