import React { useState } from "react";
import './Navbar.css'
import Mobilemenu from "./Mobilemenu";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img className="logo" src="./public/images/logo-dark.svg"></img>
      <img className="menu-icon" 
      src={
        menuOpen ?
      "./public/images/icon_close.svg"
      : "./public/images/icon-hamburger.svg"
      }
      alt="Menu toggle"
      onClick={toggleMenu}
      />
    </nav>

    
  );
};

export default Navbar;
