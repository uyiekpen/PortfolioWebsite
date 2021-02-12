import React from "react";
import Nextpage from "./AnotherPart/Nextpage";
import Content from "./Content/Content";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Content/>
      <Nextpage/>
      <Footer />
    </div>
  );
}

export default Home;
