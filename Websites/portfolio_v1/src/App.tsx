import StartSection from "./sections/StartSection";
import HeaderSection from "./sections/HeaderSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./styles/globals.css";
import MobileNavSection from "./sections/MobileNavSection";

function App() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [refStart, inViewStart] = useInView({ threshold: 0.5 });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 });
  const [refPortfolio, inViewPortfolio] = useInView({ threshold: 0.5 });
  const [refContact, inViewContact] = useInView({ threshold: 0.5 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inViewStart) setActiveSection("home");
    if (inViewAbout) setActiveSection("about");
    if (inViewPortfolio) setActiveSection("portfolio");
    if (inViewContact) setActiveSection("contact");
  }, [inViewStart, inViewAbout, inViewPortfolio, inViewContact]);

  const handleChangeMobileNav = (isOpenMobileNav: boolean) => {
    setIsOpenMobileNav(isOpenMobileNav);
  };

  return (
    <>
      <HeaderSection activeSection={activeSection} />
      <MobileNavSection
        isOpenMobileNav={isOpenMobileNav}
        handleChangeMobileNav={handleChangeMobileNav}
      />
      <div className="max-w-[100rem] mx-auto 1024px:pl-[8rem]">
        <Element name="home">
          <div ref={refStart}>
            <StartSection />
          </div>
        </Element>
        <Element name="about">
          <div ref={refAbout}>
            <AboutSection />
          </div>
        </Element>
        <Element name="portfolio">
          <div ref={refPortfolio}>
            <PortfolioSection />
          </div>
        </Element>
        <Element name="contact">
          <div ref={refContact}>
            <ContactSection />
          </div>
        </Element>
      </div>
    </>
  );
}

export default App;
