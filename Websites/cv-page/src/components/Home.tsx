import styled, { keyframes } from "styled-components";
import Button from "./Button";

const StyledHome = styled.div`
  height: 100vh;
  width: 100%;
  padding-left: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 8rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    color: var(--tx-color1);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
`;

const StyledTextBox = styled.div`
  padding-bottom: 5rem;
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
    
  }
  100% {
    opacity: 0;
    transform: translateY(25px);
    
    
  }
`;

const StyledScrollMouse = styled.div`
  position: absolute;
  width: 30px;
  height: 50px;
  box-shadow: inset 0 0 0 1px var(--tx-color1);
  border-radius: 25px;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--border-color);
    left: 40%;
    top: 10px;
    transform: translateX(-50%);
    border-radius: 4px;
    animation: ${scrollAnimation} 1.5s infinite;
  }
`;

function Home() {
  return (
    <StyledHome>
      <StyledTextBox>
        <p>Hi, my name is</p>
        <h1>Roma Stakhiv</h1>
        <p>and I'm</p>
        <h2>Front-End Web Developer</h2>
      </StyledTextBox>
      <Button>{"My Projects"}</Button>
      <StyledScrollMouse />
    </StyledHome>
  );
}

export default Home;
