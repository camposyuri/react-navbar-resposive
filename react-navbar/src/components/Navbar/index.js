import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
  NavMenu,
} from "./NavbarElements";

import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          <NavLink to="/services" activeStyle>
            Services
          </NavLink>

          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>

          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
