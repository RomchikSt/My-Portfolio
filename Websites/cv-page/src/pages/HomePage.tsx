import About from "../components/About";
import Contacts from "../components/Contacts";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import styled from "styled-components";

const StyledHomePage = styled.div`
  width: calc(100vw - 12rem);
  margin-left: 12rem;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <Home />
      <About />
      <Portfolio />
      <Contacts />
    </StyledHomePage>
  );
}

export default HomePage;
