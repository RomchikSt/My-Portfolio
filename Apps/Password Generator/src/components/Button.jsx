import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  margin: 5rem;
  height: 7rem;
  width: 40rem;
  border-radius: 1rem;
  border: none;
  overflow: hidden;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    transition: opacity 0.3s ease-in-out;
  }

  &::before {
    background: linear-gradient(to right, #4776e6, #8e54e9);
    opacity: 1;
  }

  &::after {
    background: linear-gradient(to right, #6090f0, #a770eb);
    opacity: 0;
  }

  &:hover::before {
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }

  p {
    position: relative;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    z-index: 1;
  }
`;

function Button({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <p>Generate Password</p>
    </StyledButton>
  );
}

export default Button;
