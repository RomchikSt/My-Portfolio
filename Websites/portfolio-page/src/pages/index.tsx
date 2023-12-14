import StartSection from "../components/sections/StartSection";
import HeaderSection from "../components/sections/HeaderSection";
import AboutSection from "../components/sections/AboutSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <div className="mx-[9rem] pl-[8rem]">
        <Element name="home">
          <StartSection />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        <Element name="portfolio">
          <PortfolioSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </div>
    </>
  );
}
