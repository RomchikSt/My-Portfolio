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
  margin: 10rem 0;
  height: 100vh;
  font-size: 1.6rem;
`;

const AboutIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  line-height: 1.5;

  h2 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    padding: 1.5rem;
    padding-bottom: 0.2rem;
    border-bottom: 2px solid var(--border-color);
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    width: 55%;
    text-align: center;
  }
`;

const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BoxTextAboutMe = styled.div`
  width: 40%;
  font-size: 1.6rem;

  h3 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  a {
    color: var(--tx-color2);
  }
`;
const BoxAllSkills = styled.div`
  width: 40%;

  h3 {
    text-align: center;
    font-size: 2.5rem;
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
const ReactStack = styled.div`
  background-color: #181818;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid var(--border-color);

  h6 {
    margin: 1rem;
    font-size: 2rem;
  }
`;

const ReactStackItem = styled.p`
  display: inline-block;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  background-color: var(--bg-color);
`;

const StyledRiSi = styled.div`
  padding-top: 0.5rem;
  svg {
    margin-bottom: 1rem;
  }
`;

function About() {
  const frontStack = [
    {
      logo: <BiLogoHtml5 size={60} />,
      name: "HTML",
    },
    {
      logo: <BiLogoCss3 size={60} />,
      name: "CSS",
    },
    {
      logo: <BiLogoJavascript size={60} />,
      name: "JavaScript",
    },
    {
      logo: <BiLogoTypescript size={60} />,
      name: "TypeScript",
    },
    {
      logo: <BiLogoReact size={60} />,
      name: "React",
    },
  ];

  const backStack = [
    {
      logo: BiLogoNodejs,
      name: "Node.js",
    },
    {
      logo: RiSupabaseFill,
      name: "Supabase",
    },
    {
      logo: SiPostman,
      name: "Postman",
    },
    {
      logo: BiLogoDocker,
      name: "Docker",
    },
  ];

  const reactTechStack = [
    "React Hooks",
    "React Hook Form",
    "React Router",
    "Redux Toolkit",
    "React Query",
    "Axios",
    "Framer Motion",
    "i18next",
    "Next.js",
    "React Testing Library(Jest & Vitest)",
    "Material UI",
    "Tailwind CSS",
    "CSS Modules",
    "Styled-Components",
    "React Bootstrap",
    "and many many more...",
  ];

  return (
    <StyledAbout>
      <AboutIntroduction>
        <h2>About Me</h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </AboutIntroduction>
      <Boxes>
        <BoxTextAboutMe>
          <h3>Get to know me!</h3>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the <a>Portfolio</a> section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <a>contact me</a>.
          </p>
        </BoxTextAboutMe>
        <BoxAllSkills>
          <h3>My Skills</h3>
          <BoxSkills>
            <FrontStack>
              {frontStack.map((tech) => (
                <div key={tech.name}>
                  {tech.logo} <p>{tech.name}</p>
                </div>
              ))}
            </FrontStack>
            <BackStack>
              {backStack.map((tech) =>
                tech.logo === BiLogoNodejs || tech.logo === BiLogoDocker ? (
                  <div>
                    <tech.logo size={60} /> <p>{tech.name}</p>
                  </div>
                ) : (
                  <StyledRiSi>
                    <tech.logo size={45} /> <p>{tech.name}</p>
                  </StyledRiSi>
                )
              )}
            </BackStack>
            <ReactStack>
              <h6>React Tech Stack:</h6>
              <div>
                {reactTechStack.map((tech) => (
                  <ReactStackItem key={tech}>{tech}</ReactStackItem>
                ))}
              </div>
            </ReactStack>
          </BoxSkills>
        </BoxAllSkills>
      </Boxes>
    </StyledAbout>
  );
}

export default About;
