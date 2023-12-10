import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function HeaderSection() {
  return (
    <div className="w-32 fixed min-h-screen flex flex-row justify-center items-center border-r border-custom-green">
      <ul className="pointer-events-auto text-center relative">
        <li className="pointer-events-auto p-3 border-b text-custom-green">
          <button>Home</button>
        </li>
        <li className="cursor-pointer p-3 border-b">
          <button>About</button>
        </li>
        <li className="pointer-events-auto p-3 border-b">
          <button>Portfolio</button>
        </li>
        <li className="pointer-events-auto p-3">
          <button>Contact</button>
        </li>
      </ul>
      <div className="absolute flex justify-around bottom-8 w-full p-4">
        <button>
          <FaLinkedin size={22} />
        </button>
        <button>
          <FaGithub size={22} />
        </button>
        <button>
          <FaInstagram size={22} />
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;
