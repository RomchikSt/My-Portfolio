import { motion } from "framer-motion";

function ScrollMouse() {
  return (
    <motion.div
      className="hidden 1200px:block absolute ml-[3rem] scroll-mouse w-[30px] h-[50px] shadow-[inset_0_0_3px_1px_white] rounded-full left-1/2 bottom-[3rem] -translate-x-1/2 z-50"
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div
        className="absolute w-[6px] h-[6px] bg-custom-green left-[40%] top-[9px] -translate-x-1/2 rounded-full"
        animate={{ y: [0, 25], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </motion.div>
  );
}

export default ScrollMouse;
