import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FaBriefcase, FaImages } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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

function HeaderSection({ activeSection }: { activeSection: string }) {
  return (
    <motion.div
      className="w-32 fixed min-h-screen flex flex-row justify-center items-center border-r border-custom-green"
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="pointer-events-auto text-center relative">
        <motion.li
          className="pointer-events-auto p-3 border-b"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="home" smooth duration={900}>
            <motion.button className="flex items-center justify-center w-16 h-6 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "home" ? 1 : 0,
                  scale: activeSection === "home" ? 1 : 0.5,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <FaHome fill={"#0aff9d"} size={23} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "home" ? 0 : 1,
                  scale: activeSection === "home" ? 0.5 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Home
              </motion.div>
            </motion.button>
          </Link>
        </motion.li>
        <motion.li
          className="cursor-pointer p-3 border-b"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="about" smooth duration={900}>
            <motion.button className="flex items-center justify-center w-16 h-6 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "about" ? 1 : 0,
                  scale: activeSection === "about" ? 1 : 0.5,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <BsFillInfoCircleFill fill={"#0aff9d"} size={23} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "about" ? 0 : 1,
                  scale: activeSection === "about" ? 0.5 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                About
              </motion.div>
            </motion.button>
          </Link>
        </motion.li>
        <motion.li
          className="pointer-events-auto p-3 border-b"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="portfolio" smooth duration={900}>
            <motion.button className="flex items-center justify-center w-16 h-6 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "portfolio" ? 1 : 0,
                  scale: activeSection === "portfolio" ? 1 : 0.5,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <FaBriefcase fill={"#0aff9d"} size={23} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "portfolio" ? 0 : 1,
                  scale: activeSection === "portfolio" ? 0.5 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Portfolio
              </motion.div>
            </motion.button>
          </Link>
        </motion.li>
        <motion.li
          className="pointer-events-auto p-3"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="contact" smooth duration={900}>
            <motion.button className="flex items-center justify-center w-16 h-6 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "contact" ? 1 : 0,
                  scale: activeSection === "contact" ? 1 : 0.5,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <IoIosMail fill={"#0aff9d"} size={30} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  opacity: activeSection === "contact" ? 0 : 1,
                  scale: activeSection === "contact" ? 0.5 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Contact
              </motion.div>
            </motion.button>
          </Link>
        </motion.li>
      </ul>
      <motion.div
        className="absolute flex justify-around bottom-8 w-full p-4"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a href="https://www.linkedin.com/in/romchik-stakhiv/" target="/">
          <button>
            <ReactIcon>
              <FaLinkedin size={22} />
            </ReactIcon>
          </button>
        </a>
        <a href="https://github.com/RomchikSt" target="/">
          <button>
            <ReactIcon>
              <FaGithub size={22} />
            </ReactIcon>
          </button>
        </a>
        <a href="https://www.instagram.com/romchik_sta/" target="/">
          <button>
            <ReactIcon>
              <FaInstagram size={22} />
            </ReactIcon>
          </button>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HeaderSection;
