import styled from "styled-components";
import { SiPostman } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import {
  BiLogoNodejs,
  BiLogoDocker,
  BiLogoReact,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

const StyledAbout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--tx-color1);
  font-size: 1.6rem;
  padding-left: 20rem;
`;

const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Box = styled.div`
  width: 40%;

  h3 {
    text-align: center;
  }
`;
const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FrontStack = styled.div`
  display: flex;

  div {
    margin: 2rem;
    text-align: center;
  }
`;

const BackStack = styled.div`
  display: flex;

  div {
    margin: 2rem;
    text-align: center;
  }
`;

function About() {
  return (
    <StyledAbout>
      <h2>About Me</h2>
      <p>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <Boxes>
        <Box>
          <h3>Get to know me!</h3>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Portfolio section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </Box>
        <Box>
          <h3>My Skills</h3>
          <BoxSkills>
            <FrontStack>
              <div>
                <BiLogoHtml5 size={60} /> <p>HTML</p>
              </div>
              <div>
                <BiLogoCss3 size={60} /> <p>CSS</p>
              </div>
              <div>
                <BiLogoJavascript size={60} /> <p>JavaScript</p>
              </div>
              <div>
                <BiLogoTypescript size={60} /> <p>TypeScript</p>
              </div>
              <div>
                <BiLogoReact size={60} /> <p>React</p>
              </div>
            </FrontStack>
            <BackStack>
              <div>
                <BiLogoNodejs size={60} /> <p>Node.js</p>
              </div>
              <div>
                <RiSupabaseFill size={60} /> <p>Supabase</p>
              </div>
              <div>
                <SiPostman size={60} /> <p>Postman</p>
              </div>
              <div>
                <BiLogoDocker size={60} /> <p>Docker</p>
              </div>
            </BackStack>
          </BoxSkills>
        </Box>
      </Boxes>
    </StyledAbout>
  );
}

export default About;
