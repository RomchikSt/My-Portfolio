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

function AboutSection() {
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
      logo: <BiLogoNodejs size={60} />,
      name: "Node.js",
    },
    {
      logo: <RiSupabaseFill size={50} className="mt-2.5" />,
      name: "Supabase",
    },
    {
      logo: <SiPostman size={50} className="mt-2.5" />,
      name: "Postman",
    },
    {
      logo: <BiLogoDocker size={60} />,
      name: "Docker",
    },
    {
      logo: <SiVite size={60} />,
      name: "Vite",
    },
    {
      logo: <FaGitAlt size={60} />,
      name: "Git",
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
    <div className="w-full my-20 text-center pl-[8rem] flex flex-col items-center">
      <h2 className="inline-block text-5xl font-bold p-4 pb-4 border-b-4 border-custom-green">
        About
      </h2>
      <p className="mt-4 text-xl w-5/12">
        Here you will find more information about me, what I do, and my current
        skills of programming and technology
      </p>
      <div className="flex justify-around mt-20 items-center">
        <div className="w-5/12">
          <h3 className="text-2xl text-custom-green font-semibold m-18">
            Get to know me!
          </h3>
          <p className="mt-4 text-l text-start">
            I'm a Front-End Web Developer building the Front-End of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the{" "}
            <a className=" text-custom-green">Portfolio</a> section.
          </p>
          <p className="mt-4 text-l text-start">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to{" "}
            <a className=" text-custom-green">contact me</a>.
          </p>
        </div>
        <div className="flex-col w-5/12">
          <h3 className="text-2xl text-custom-green font-semibold m-18">
            Tech Stack
          </h3>
          <div className="flex justify-center gap-10 mt-8">
            {frontStack.map((tech) => (
              <div key={tech.name}>
                {tech.logo} <p>{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-10 mt-8">
            {backStack.map((tech) => (
              <div key={tech.name}>
                {tech.logo} <p>{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center border rounded-3xl border-custom-green mt-8 p-6 bg-custom-black">
            <h4 className="text-xl text-custom-green font-semibold text-start">
              React Tech Stack:
            </h4>
            <div className="flex flex-wrap">
              {reactTechStack.map((tech) => (
                <div key={tech}>
                  <p className="p-1.5 px-2.5 rounded-2xl m-1 bg-custom bg-custom-black-main">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
