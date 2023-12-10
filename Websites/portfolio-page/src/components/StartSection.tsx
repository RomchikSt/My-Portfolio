import { motion } from "framer-motion";

function StartSection() {
  return (
    <div className="w-full min-h-screen pl-80 text-custom-green flex flex-col justify-center">
      <p className="text-xl text-custom-green pb-1 pl-1">Hi, my name is</p>
      <h1 className="text-8xl font-bold pb-4">Roma Stakhiv</h1>
      <p className="text-xl text-custom-green pb-1 pl-1">and I`m </p>
      <h2 className="text-5xl font-bold pl-1">Front-End Web Developer</h2>
      <button className="pointer-events-auto my-14 w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-2">
        <p>My Projects</p>
      </button>
      <div className="ml-[4rem] scroll-mouse absolute w-[30px] h-[50px] shadow-[inset_0_0_0_1px_white] rounded-full left-1/2 bottom-[4rem] -translate-x-1/2">
        <motion.div
          className="absolute w-[6px] h-[6px] bg-custom-green left-[40%] top-[10px] -translate-x-1/2 rounded-full"
          animate={{ y: [0, 25], opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </div>
  );
}

export default StartSection;
