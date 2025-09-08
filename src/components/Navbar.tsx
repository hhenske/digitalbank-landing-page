import React from "react";
import "./Navbar.css";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./images/logo-dark.svg"
        alt="EasyBank Logo"
      />
      <img
        className="menu-icon"
        src={
          menuOpen
            ? "./images/icon-close.svg"
            : "./images/icon-hamburger.svg"
        }
        alt={menuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
