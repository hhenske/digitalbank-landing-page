import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo2" src="./public/images/logo-light.svg" />
      <div className="social-row">
        <img src="./public/images/icon-facebook.svg" />
        <img src="./public/images/icon-youtube.svg" />
        <img src="./public/images/icon-twitter.svg" />
        <img src="./public/images/icon-pinterest.svg" />
        <img src="./public/images/icon-instagram.svg" />
      </div>
      <ul className="link-column">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <button className="cta-button">Request Invite</button>   
    </footer>
  );
};

export default Footer;
