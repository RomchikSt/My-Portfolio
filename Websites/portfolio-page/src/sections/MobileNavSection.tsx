import { motion } from "framer-motion";

type MobileNavSectionProps = {
  isOpenMobileNav: boolean;
  handleChangeMobileNav: (isOpenMobileNav: boolean) => void;
};

function MobileNavSection({
  isOpenMobileNav,
  handleChangeMobileNav,
}: MobileNavSectionProps) {
  const MENU_ITEMS = ["Home", "About", "Portfolio", "Contact"];
  const burgeSpans = [
    {
      id: "firstL",
      position: "top-0 right-0",
      animate: {
        rotate: isOpenMobileNav ? -45 : 0,
        top: isOpenMobileNav ? 3 : 0,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "firstR",
      position: "top-0 left-0",
      animate: {
        rotate: isOpenMobileNav ? 45 : 0,
        top: isOpenMobileNav ? 3 : 0,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "secondL",
      position: "top-[9px] right-0",
      animate: {
        opacity: isOpenMobileNav ? 0 : 1,
        x: isOpenMobileNav ? 10 : 0,
        transition: { duration: 0.3 },
      },
    },
    {
      id: "secondR",
      position: "top-[9px] left-0",
      animate: {
        opacity: isOpenMobileNav ? 0 : 1,
        x: isOpenMobileNav ? -10 : 0,
        transition: { duration: 0.3 },
      },
    },
    {
      id: "thirdL",
      position: "top-[18px] right-0",
      animate: {
        rotate: isOpenMobileNav ? 45 : 0,
        top: isOpenMobileNav ? 15 : 18,
        transition: { duration: 0.2 },
      },
    },
    {
      id: "thirdR",
      position: "top-[18px] left-0",
      animate: {
        rotate: isOpenMobileNav ? -45 : 0,
        top: isOpenMobileNav ? 15 : 18,
        transition: { duration: 0.2 },
      },
    },
  ];

  return (
    <div className="fixed top-[30px] right-[80px] 1024px:hidden z-50">
      <input
        type="checkbox"
        id="active"
        style={{ display: "none" }}
        checked={isOpenMobileNav}
        onChange={() => handleChangeMobileNav(!isOpenMobileNav)}
        className="z-50"
      />
      <motion.label
        className="absolute h-[50px] w-[50px] text-center bg-[#0aff9d] rounded-full flex justify-center items-center cursor-pointer z-[51]"
        htmlFor="active"
        initial={{ x: "40%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        <motion.div className="w-[30px] h-[23px] relative">
          {burgeSpans.map((item) => (
            <motion.span
              key={item.id}
              className={`block absolute h-[5px] w-[60%] bg-[#111111] rounded-[9px] ${item.position}`}
              animate={item.animate}
            />
          ))}
        </motion.div>
      </motion.label>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-custom-green-play z-[50] shadow-lg"
        initial={{ opacity: isOpenMobileNav ? 1 : 0 }}
        animate={{
          clipPath: isOpenMobileNav
            ? "circle(75% at 50% 50%)"
            : "circle(25px at calc(100% - 45px) 45px)",
          opacity: isOpenMobileNav ? 1 : 0,
        }}
      >
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-20 z-50">
          {MENU_ITEMS.map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1 }}>
              <a className="bg-black text-6xl py-2 px-10 rounded-[50px] text-white transition-all z-50">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default MobileNavSection;
