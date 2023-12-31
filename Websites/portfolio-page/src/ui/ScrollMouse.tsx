import { motion } from "framer-motion";

function ScrollMouse() {
  return (
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
  );
}

export default ScrollMouse;
