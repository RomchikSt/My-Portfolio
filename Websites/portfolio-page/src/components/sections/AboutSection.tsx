import { SiPostman, SiVite } from "react-icons/si";
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
import { FaGitAlt } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import styled from "styled-components";

const ReactIcon = styled.div<{ $color?: string; $hoverColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${({ $color }) => $color ?? "#f0fdf4"};
    transition: all 0.6s ease-in-out;
  }
  svg:hover {
    fill: ${({ $hoverColor }) => $hoverColor ?? "#0aff9d"};
  }
`;

function AboutSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refSkill, inViewSkill] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const frontStack = [
    {
      logo: <BiLogoHtml5 size={60} />,
      name: "HTML",
      color: "#E34F26",
    },
    {
      logo: <BiLogoCss3 size={60} />,
      name: "CSS",
      color: "#1572B6",
    },
    {
      logo: <BiLogoJavascript size={60} />,
      name: "JavaScript",
      color: "#F7DF1E",
    },
    {
      logo: <BiLogoTypescript size={60} />,
      name: "TypeScript",
      color: "#007ACC",
    },
    {
      logo: <BiLogoReact size={60} />,
      name: "React",
      color: "#61DAFB",
    },
  ];

  const backStack = [
    {
      logo: <BiLogoNodejs size={60} />,
      name: "Node.js",
      color: "#339933",
    },
    {
      logo: <RiSupabaseFill size={50} className="mt-2.5 pb-1" />,
      name: "Supabase",
      color: "#3ECF8E",
    },
    {
      logo: <SiPostman size={50} className="mt-2.5 pb-2.5" />,
      name: "Postman",
      color: "#FF6C37",
    },
    {
      logo: <BiLogoDocker size={60} />,
      name: "Docker",
      color: "#2496ED",
    },
    {
      logo: <FaGitAlt size={55} className="mt-1.5 pb-1.5" />,
      name: "Git",
      color: "#F05032",
    },
    {
      logo: <SiVite size={50} className="mt-2 pb-1.5" />,
      name: "Vite",
      color: "#646CFF",
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
    "Material UI",
    "Tailwind CSS",
    "CSS Modules",
    "Styled-Components",
    "React Bootstrap",
    "and many many more...",
  ];

  return (
    <div className="mt-10 text-center flex flex-col items-center">
      <motion.h2
        className="text-5xl font-bold py-4 border-b-4 border-custom-green"
        ref={refHeader}
        initial={{ y: "50%", opacity: 0 }}
        animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.p
        className="mt-4 text-xl w-5/12"
        ref={refHeader}
        initial={{ y: "50%", opacity: 0 }}
        animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Here you will find more information about me, what I do, and my current
        skills of programming and technology
      </motion.p>
      <motion.div
        className="flex justify-between mt-20 items-center"
        ref={refSkill}
        initial={{ y: "20%", opacity: 0 }}
        animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-5/12">
          <motion.h3
            className="text-2xl text-custom-green font-semibold"
            ref={refSkill}
            initial={{ y: "50%", opacity: 0 }}
            animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get to know me!
          </motion.h3>
          <motion.p
            className="mt-4 text-l text-start"
            ref={refSkill}
            initial={{ y: "50%", opacity: 0 }}
            animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Front-End Web Developer building the Front-End of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the{" "}
            <Link to="portfolio" smooth duration={500}>
              <span className=" text-custom-green cursor-pointer">
                Portfolio
              </span>
            </Link>{" "}
            section.
          </motion.p>
          <motion.p
            className="mt-4 text-l text-start"
            ref={refSkill}
            initial={{ y: "50%", opacity: 0 }}
            animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to{" "}
            <Link to="contact" smooth duration={500}>
              <span className=" text-custom-green cursor-pointer">
                contact me
              </span>
            </Link>
          </motion.p>
        </div>
        <div className="flex-col w-5/12">
          <h3 className="text-2xl text-custom-green font-semibold">
            Tech Stack
          </h3>
          <div className="flex justify-center gap-10 mt-8">
            {frontStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                ref={refSkill}
                initial={{ y: "20%", opacity: 0 }}
                animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i / 10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <ReactIcon $hoverColor={tech.color}>{tech.logo}</ReactIcon>
                  </motion.div>
                  <p>{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-10 mt-8">
            {backStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                ref={refSkill}
                initial={{ y: "20%", opacity: 0 }}
                animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i / 10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <ReactIcon $hoverColor={tech.color}>{tech.logo}</ReactIcon>
                  </motion.div>
                  <p>{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col justify-center border rounded-3xl border-custom-green mt-8 p-6 bg-custom-black w-full">
            <motion.h4
              className="text-xl text-custom-green font-semibold text-start"
              ref={refSkill}
              initial={{ y: "20%", opacity: 0 }}
              animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              React Tech Stack:
            </motion.h4>
            <div className="flex flex-wrap">
              {reactTechStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  ref={refSkill}
                  initial={{ y: "20%", opacity: 0 }}
                  animate={inViewSkill ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i / 30 }}
                >
                  <p className="p-1.5 px-2.5 rounded-2xl m-1 bg-custom bg-custom-black-main">
                    {tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
