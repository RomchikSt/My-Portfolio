import ScrollMouse from "@/ui/ScrollMouse";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

function StartSection() {
  const introductionText = [
    {
      text: "Hi, my name is",
      textSize: "text-xl",
      delay: 0.1,
      className: "text-xl text-custom-green pb-1 pl-1",
    },
    {
      text: "Roma Stakhiv",
      textSize: "text-8xl",
      delay: 0.2,
      className: "text-8xl font-bold",
    },
    {
      text: "and I`m",
      textSize: "text-xl",
      delay: 0.3,
      className: "text-xl text-custom-green pb-1 pl-1",
    },
    {
      text: "Front-End Web Developer",
      textSize: "text-5xl",
      delay: 0.4,
      className: "text-5xl font-bold pl-0.5",
    },
  ];

  return (
    <div className="flex">
      <div className="w-full min-h-screen flex flex-col justify-center">
        {introductionText.map((item, i) => (
          <motion.p
            key={i}
            className={item.className}
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            {item.text}
          </motion.p>
        ))}
        <div className="flex justify-start mt-14">
          <Link to="portfolio" smooth duration={500}>
            <motion.button
              className="pointer-events-auto w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center"
              initial={{ y: "50%", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#0aff9d",
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              transition={{
                backgroundColor: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <motion.p
                className="m-0 w-full h-full text-center flex items-center justify-center"
                initial={{ color: "#FFFFFF" }}
                whileHover={{ color: "#111111" }}
              >
                My Projects
              </motion.p>
            </motion.button>
          </Link>
        </div>
        <ScrollMouse />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Image
          src="/img/1111.jpg"
          alt="Roma Stakhiv on the photo"
          width={900}
          height={595}
          priority
        />
      </div>
    </div>
  );
}

export default StartSection;
