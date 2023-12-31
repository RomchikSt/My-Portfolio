import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { IoPlayCircleOutline } from "react-icons/io5";

type PlayingStatus = {
  [key: number]: { playing: boolean; animate: boolean };
};

const ReactIcon = styled.div<{ $color?: string; $hoverColor?: string }>`
  svg {
    fill: ${({ $color }) => $color ?? "#f0fdf4"};
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }
  svg:hover {
    fill: ${({ $hoverColor }) => $hoverColor ?? "#0aff9d"};
    transform: translateY(-5px);
  }
`;

function PortfolioSection() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [playingStatus, setPlayingStatus] = useState<PlayingStatus>({});
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refVideo, inViewVideo] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = (id: number) => {
    setPlayingStatus({
      ...playingStatus,
      [id]: { playing: true, animate: true },
    });
  };

  const handleMouseLeave = (id: number) => {
    setPlayingStatus({
      ...playingStatus,
      [id]: { playing: false, animate: false },
    });
  };

  const PortfolioProjects = [
    {
      id: 0,
      title: "Portfolio",
      description:
        "This is a full-stack hotel management application, with the backend powered by Supabase. Designed to streamline the intricate tasks of hotel operations, this platform facilitates real-time room tracking, swift guest reservations, check-in and check-out processes, and generates insightful statistics about room occupancy and guest behavior.",
      stack: ["TS", "React", "Next.js", "Tailwind", "Framer Motion"],
      githubLink: "",
      link: "",
      video: "./video/WildOasisTrailer.mp4",
    },
    {
      id: 1,
      title: "TopKolesa",
      description:
        "This is a full-stack hotel management application, with the backend powered by Supabase. Designed to streamline the intricate tasks of hotel operations, this platform facilitates real-time room tracking, swift guest reservations, check-in and check-out processes, and generates insightful statistics about room occupancy and guest behavior.",
      stack: ["TS", "React", "i18-next", "M Ui", "MySQL"],
      githubLink: "",
      link: "",
      video: "./video/WildOasisTrailer.mp4",
    },
    {
      id: 2,
      title: "Wild Oasis",
      description:
        "This is a full-stack hotel management application, with the backend powered by Supabase. Designed to streamline the intricate tasks of hotel operations, this platform facilitates real-time room tracking, swift guest reservations, check-in and check-out processes, and generates insightful statistics about room occupancy and guest behavior.",
      stack: ["JS", "React", "Styled-Components", "Supabase", "Vite"],
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
      <motion.div
        className="mb-16 w-full"
        ref={refVideo}
        initial={{ y: "10%", opacity: 0 }}
        animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        {isMounted &&
          PortfolioProjects.map((project) =>
            project.id % 2 === 0 ? (
              <div key={project.id} className="w-full mt-32 relative px-40">
                <div className="flex">
                  <motion.div
                    className="flex justify-end"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                    initial={{ x: "-60%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.75, delay: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 left-0 bottom-0 z-10 bg-custom-green-play"
                      initial={{ opacity: 1, scale: 1 }}
                      whileHover={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IoPlayCircleOutline
                        size={"7rem"}
                        className="m-auto h-full"
                      />
                    </motion.div>
                    <ReactPlayer
                      url="./video/WildOasisTrailer.mp4"
                      playing={playingStatus[project.id]?.playing}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute top-[0%] right-[25%] w-5/12  border-custom-green p-6  transform -translate-x-[30%] -translate-y-[54%] "
                  animate={{
                    x: playingStatus[project.id]?.animate ? "50%" : "30%",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3
                    className="p-6 text-2xl text-custom-green font-semibold text-right"
                    initial={{ x: "60%", y: "5%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="bg-custom-black rounded-3xl p-6 h-3/12 text-right"
                    initial={{ x: "60%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-row m-3 gap-6 justify-end">
                    {project.stack.map((tech) => (
                      <motion.p
                        key={tech}
                        className="text-custom-green"
                        initial={{ y: "90%", opacity: 0 }}
                        animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + project.stack.indexOf(tech) / 10,
                        }}
                      >
                        {tech}
                      </motion.p>
                    ))}
                  </div>
                  <div className="flex flex-row m-3 gap-3 justify-end">
                    <motion.div
                      initial={{ y: "80%", opacity: 0 }}
                      animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <ReactIcon className="cursor-pointer">
                        <RiGithubFill size={30} />
                      </ReactIcon>
                    </motion.div>
                    <motion.div
                      initial={{ y: "80%", opacity: 0 }}
                      animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <ReactIcon className="cursor-pointer">
                        <OpenInNewRoundedIcon style={{ fontSize: "30px" }} />
                      </ReactIcon>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div key={project.id} className="w-full mt-32 relative px-40">
                <div className="flex justify-end">
                  <motion.div
                    className="flex justify-end"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                    initial={{ x: "60%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 left-0 bottom-0 z-10 bg-custom-green-play"
                      initial={{ opacity: 1, scale: 1 }}
                      whileHover={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IoPlayCircleOutline
                        size={"7rem"}
                        className="m-auto h-full"
                      />
                    </motion.div>
                    <ReactPlayer
                      url="./video/WildOasisTrailer.mp4"
                      playing={playingStatus[project.id]?.playing}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute top-[0%] left-[25%] w-5/12  border-custom-green p-6  transform -translate-x-[30%] -translate-y-[54%] "
                  animate={{
                    x: playingStatus[project.id]?.animate ? "-50%" : "-30%",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3
                    className="p-6 text-2xl text-custom-green font-semibold"
                    initial={{ x: "-60%", y: "-5%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="bg-custom-black rounded-3xl p-6 h-3/12"
                    initial={{ x: "-60%", y: "-5%", opacity: 0 }}
                    animate={inViewVideo ? { x: 0, y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-row m-3 gap-6 ">
                    {project.stack.map((tech) => (
                      <motion.p
                        key={tech}
                        className="text-custom-green"
                        initial={{ y: "90%", opacity: 0 }}
                        animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + project.stack.indexOf(tech) / 10,
                        }}
                      >
                        {tech}
                      </motion.p>
                    ))}
                  </div>
                  <div className="flex flex-row m-3 gap-3">
                    <motion.div
                      initial={{ y: "80%", opacity: 0 }}
                      animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <ReactIcon className="cursor-pointer">
                        <RiGithubFill size={30} />
                      </ReactIcon>
                    </motion.div>
                    <motion.div
                      initial={{ y: "80%", opacity: 0 }}
                      animate={inViewVideo ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <ReactIcon className="cursor-pointer">
                        <OpenInNewRoundedIcon style={{ fontSize: "30px" }} />
                      </ReactIcon>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )
          )}
      </motion.div>
    </div>
  );
}

export default PortfolioSection;
