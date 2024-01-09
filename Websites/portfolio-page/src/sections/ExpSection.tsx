import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ExpSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refDesc, inViewDesc] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const headerAnimation = {
    initial: { y: "50%", opacity: 0 },
    animate: inViewHeader ? { y: 0, opacity: 1 } : {},
  };

  const descAnimation = {
    initial: { y: "40%", opacity: 0 },
    animate: inViewDesc ? { y: 0, opacity: 1 } : {},
  };

  const reactTechStack = [
    "TypeScript",
    "React",
    "Redux",
    "Framer Motion",
    "i18next",
    "Material UI",
    "Git",
    "GitHub",
  ];

  return (
    <div className="w-full pt-14 flex flex-col items-center min-h-[75vh]">
      <div className="text-center flex flex-col items-center w-5/12 mb-12">
        <motion.h2
          className="inline-block text-5xl font-bold py-4 border-b-4 border-custom-green"
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="mt-4 text-xl "
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my professional journey
        </motion.p>
      </div>
      <motion.div
        className="flex m-4 gap-2 flex-col items-start border rounded-3xl border-custom-green mt-8 p-6 bg-custom-black w-9/12 837px:w-3/5 1300px:w-[50rem] shadow-[0_0px_4px_1px_#0aff9d]"
        ref={refDesc}
        {...descAnimation}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-between w-full">
          <p className="text-2xl font-semibold">Freelance</p>
          <p className="text-xl font-semibold">2023-present</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-xl font-semibold text-custom-green">
            React Engineer
          </p>
          <p className="text-xl font-semibold">Kyiv, Ukraine</p>
        </div>
        <p className="text-lg">
          Front-End Developer, focused on creating user-friendly interfaces.
          Expert in developing responsive UI, optimizing for cross-browser
          compatibility and adaptation for different screen sizes. Proficient in
          implementing user interface logic and design principles.
        </p>
        <div className="flex flex-wrap flex-start">
          {reactTechStack.map((tech, i) => (
            <motion.div
              key={tech}
              transition={{ duration: 0.5, delay: 0.2 + i / 30 }}
            >
              <p className="py-1.5 px-3 rounded-2xl m-1 bg-custom bg-custom-black-main">
                {tech}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ExpSection;
