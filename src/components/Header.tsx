import React from "react";
import "./Header.css";
import Mobilemenu from "./Mobilemenu";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="hero">
      <img src="./images/image-mockups.png" alt="Mobile banking mockup" />

      {/* Overlay (sits above hero, behind Mobile menu) */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu} // close when clicked
        ></div>
      )}

      {/* Mobile Menu (above overlay and header content) */}
      {menuOpen && <Mobilemenu toggleMenu={toggleMenu} />}
    </header>
  );
};

export default Header;