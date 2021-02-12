import React from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              HOME
            </SidebarLink>
            <SidebarLink  onClick={toggle}>
            <a style={
              {
                textDecoration:"none",
                color:"white"
              }
            } href="https://www.blogger.com/blog/posts/6134704347944270128">  BLOGS</a>
            </SidebarLink>
            <SidebarLink onClick={toggle}>
            <a style={
            {
              textDecoration:"none",
              color:"white"
            }
          }
            href ="https://web.facebook.com/daniel.idiahi.1">  CONTACT</a>
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
