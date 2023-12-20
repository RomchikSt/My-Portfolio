import StartSection from "../components/sections/StartSection";
import HeaderSection from "../components/sections/HeaderSection";
import AboutSection from "../components/sections/AboutSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef, use } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [refStart, inViewStart] = useInView({ threshold: 0.5 });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 });
  const [refPortfolio, inViewPortfolio] = useInView({ threshold: 0.5 });
  const [refContact, inViewContact] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewStart) setActiveSection("home");
    else if (inViewAbout) setActiveSection("about");
    else if (inViewPortfolio) setActiveSection("portfolio");
    else if (inViewContact) setActiveSection("contact");
  }, [inViewStart, inViewAbout, inViewPortfolio, inViewContact]);

  return (
    <>
      <HeaderSection activeSection={activeSection} />
      <div className="mx-[9rem] pl-[8rem]">
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
