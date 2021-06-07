import React from 'react';
import {
  Nav,
  NavbarContent,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContent>
          <NavbarLogo to="/">pluto.me</NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContent>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
