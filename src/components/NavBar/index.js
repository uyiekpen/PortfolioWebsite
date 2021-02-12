import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import PortraitIcon from '@material-ui/icons/Portrait';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <PortraitIcon style={{ marginRight: "10px" }} />
              DEE
            </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks > <a style={
              {
                textDecoration:"none",
                color:"white"
              }
            } href="https://www.blogger.com/blog/posts/6134704347944270128">  BLOGS</a></NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks > <a style={
            {
              textDecoration:"none",
              color:"white"
            }
          }
            href ="https://web.facebook.com/daniel.idiahi.1">  CONTACT</a></NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem> */}
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
