import { motion } from "framer-motion";

function StartSection() {
  return (
    <div className="w-full min-h-screen text-custom-green flex flex-col justify-center">
      <motion.p
        className="text-xl text-custom-green pb-1 pl-1"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-8xl font-bold"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Roma Stakhiv
      </motion.h1>
      <motion.p
        className="text-xl text-custom-green pb-1 pl-1"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        and I`m
      </motion.p>
      <motion.h2
        className="text-5xl font-bold pl-0.5"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Front-End Web Developer
      </motion.h2>
      <motion.button
        className="pointer-events-auto my-14 w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>My Projects</p>
      </motion.button>

      <motion.div
        className="ml-[4rem] scroll-mouse absolute w-[30px] h-[50px] shadow-[inset_0_0_0_1px_white] rounded-full left-1/2 bottom-[4rem] -translate-x-1/2"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div
          className="absolute w-[6px] h-[6px] bg-custom-green left-[40%] top-[10px] -translate-x-1/2 rounded-full"
          animate={{ y: [0, 25], opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
}

export default StartSection;
