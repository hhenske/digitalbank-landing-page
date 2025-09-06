import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="./public/images/logo-dark.svg"></img>
      <img className="hamburger" src="./public/images/icon-hamburger.svg"></img>
    </nav>
  );
};

export default Navbar;
