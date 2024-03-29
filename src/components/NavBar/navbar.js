import React from 'react';
import '../../App.css';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { FaBars } from 'react-icons/fa';

function NavBar({ toggle }){

  return(
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to="/">Jacob Heinrich</NavLogo>
    <MobileIcon onClick = {toggle}>
    <FaBars />
    </ MobileIcon>
    <NavMenu>
    <NavItem>
    <NavLinks to="about">About</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to="technology">Technologies</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to="projects">Projects</NavLinks>
    </NavItem>
    <NavItem>
    <NavLinks to="footer">Contact Me</NavLinks>
    </NavItem>
    </NavMenu>
    </NavbarContainer>
    </Nav>
    </>
  )
}

export default NavBar;
