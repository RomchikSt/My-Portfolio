import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function HeaderSection() {
  return (
    <motion.div
      className="w-32 fixed min-h-screen flex flex-row justify-center items-center border-r border-custom-green"
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="pointer-events-auto text-center relative">
        <motion.li
          className="pointer-events-auto p-3 border-b text-custom-green"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="home" smooth duration={500}>
            <button>Home</button>
          </Link>
        </motion.li>
        <motion.li
          className="cursor-pointer p-3 border-b"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="about" smooth duration={500}>
            <button>About</button>
          </Link>
        </motion.li>
        <motion.li
          className="pointer-events-auto p-3 border-b"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="portfolio" smooth duration={500}>
            <button>Portfolio</button>
          </Link>
        </motion.li>
        <motion.li
          className="pointer-events-auto p-3"
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="contact" smooth duration={500}>
            <button>Contact</button>
          </Link>
        </motion.li>
      </ul>
      <motion.div
        className="absolute flex justify-around bottom-8 w-full p-4"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button>
          <FaLinkedin size={22} />
        </button>
        <button>
          <FaGithub size={22} />
        </button>
        <button>
          <FaInstagram size={22} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default HeaderSection;
