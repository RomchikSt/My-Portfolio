import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function PortfolioSection() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refVideo, inViewVideo] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const PortfolioProjects = [
    {
      id: 0,
      title: "Portfolio",
      description: "Portfolio.",
      stack: ["TS", "React", "Next.js", "Tailwind", "Framer Motion"],
      githubLink: "",
      link: "",
      video: "./video/WildOasisTrailer.mp4",
    },
    {
      id: 1,
      title: "Wild Oasis",
      description:
        "This is a full-stack hotel management application, with the backend powered by Supabase. Designed to streamline the intricate tasks of hotel operations, this platform facilitates real-time room tracking, swift guest reservations, check-in and check-out processes, and generates insightful statistics about room occupancy and guest behavior.",
      stack: ["JS", "React", "Styled-Components", "Supabase", "Vite"],
      githubLink: "",
      externalLink: "",
      video: "./video/WildOasisTrailer.mp4",
    },
    {
      id: 2,
      title: "Forkify",
      description:
        "Forkify is a recipe finder wich a convenient and user-friendly web application that allows users to search for a variety of recipes. Powered by the Forkify API, the site offers a rich collection of dishes to explore. Not only can users browse through available recipes, but they can also get detailed instructions, adjust servings, bookmark their favorites, and even add their own unique recipes!",
      stack: ["HTML", "CSS", "JS", "SASS", "Parcel"],
      githubLink: "",
      externalLink: "",
      video: "./video/WildOasisTrailer.mp4",
    },
  ];

  return (
    <div className="w-full mt-24">
      <div className="text-center w-full">
        <motion.h2
          className="inline-block text-5xl font-bold py-4 border-b-4 border-custom-green"
          ref={refHeader}
          initial={{ y: "50%", opacity: 0 }}
          animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <motion.p
          className="mt-4 text-xl w-5/12 mx-auto"
          ref={refHeader}
          initial={{ y: "50%", opacity: 0 }}
          animate={inViewHeader ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Here you will find some of the personal and clients projects that I
          created with each project containing full description
        </motion.p>
      </div>
      {isMounted &&
        PortfolioProjects.map((project) =>
          project.id % 2 === 0 ? (
            <div key={project.id} className="w-full mt-32 relative px-40">
              <div className="flex">
                <div
                  className="flex justify-end"
                  onMouseEnter={() => setIsPlaying1(true)}
                  onMouseLeave={() => setIsPlaying1(false)}
                >
                  <ReactPlayer
                    url="./video/WildOasisTrailer.mp4"
                    playing={isPlaying1}
                  />
                </div>
              </div>
              <motion.div
                className="absolute top-[0%] right-[25%] w-5/12  border-custom-green p-6  transform -translate-x-[30%] -translate-y-[54%] "
                animate={{
                  x: isPlaying1 ? "50%" : "30%",
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="p-6 text-2xl text-custom-green font-semibold text-right">
                  {project.title}
                </h3>
                <p className="bg-custom-black rounded-3xl p-6 h-3/12 text-right">
                  {project.description}
                </p>
                <div className="flex flex-row m-3 gap-6 justify-end">
                  {project.stack.map((tech) => (
                    <p key={tech} className="text-custom-green">
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row m-3 gap-3 justify-end">
                  <RiGithubFill size={30} />
                  <FiExternalLink size={30} />
                </div>
              </motion.div>
            </div>
          ) : (
            <div key={project.id} className="w-full mt-32 relative px-40">
              <div className="flex justify-end">
                <div
                  className="flex justify-end"
                  onMouseEnter={() => setIsPlaying2(true)}
                  onMouseLeave={() => setIsPlaying2(false)}
                >
                  <ReactPlayer
                    url="./video/WildOasisTrailer.mp4"
                    playing={isPlaying2}
                  />
                </div>
              </div>
              <motion.div
                className="absolute top-[0%] left-[25%] w-5/12  border-custom-green p-6  transform -translate-x-[30%] -translate-y-[54%] "
                animate={{
                  x: isPlaying2 ? "-50%" : "-30%",
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="p-6 text-2xl text-custom-green font-semibold">
                  {project.title}
                </h3>
                <p className="bg-custom-black rounded-3xl p-6 h-3/12">
                  {project.description}
                </p>
                <div className="flex flex-row m-3 gap-6 ">
                  {project.stack.map((tech) => (
                    <p key={tech} className="text-custom-green">
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row m-3 gap-3">
                  <RiGithubFill size={30} />
                  <FiExternalLink size={30} />
                </div>
              </motion.div>
            </div>
          )
        )}
    </div>
  );
}

export default PortfolioSection;
