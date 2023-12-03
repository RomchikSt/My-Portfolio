import styled, { keyframes } from "styled-components";
import Button from "./Button";

const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 40rem;
  justify-content: center;

  h1,
  h2 {
    background: var(--bg-liner-gradiend);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h1 {
    font-size: 8rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h4 {
    color: var(--tx-color1);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
`;

const StyledTextBox = styled.div`
  padding-bottom: 4rem;
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
`;

const StyledScrollMouse = styled.div`
  position: absolute;
  width: 40px;
  height: 70px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    left: 40%;
    top: 8px;
    border-radius: 4px;
    animation: ${scrollAnimation} 1.5s infinite;
  }
`;

function Home() {
  return (
    <StyledHome>
      <StyledTextBox>
        <h4>Hi, my name is</h4>
        <h1>Roma Stakhiv</h1>
        <h4>and I'm</h4>
        <h2>Front-End Web Developer</h2>
      </StyledTextBox>
      <Button>{"My Projects"}</Button>
      {/* <StyledScrollMouse /> */}
    </StyledHome>
  );
}

export default Home;
