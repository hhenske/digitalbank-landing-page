import React from "react";
import './Features.css';

interface FeaturesProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Features: React.FC<FeaturesProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="next-generation">
         {/* Overlay (sits above hero, behind Mobile menu) */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu} // close when clicked
        ></div>
      )}
      <section className="feature-header">
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your Digitalbank account will be a one-stop shop for spending, saving, budgeting, investing, and much more.</p>
          <button className="cta-button">Request Invite</button>
      </section>
      <div className="features-container">
          <h2>Why choose Digitalbank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
          <img className="feature-icon" src="./public/images/icon-online.svg" />
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          <img className="feature-icon" src="./public/images/icon-budgeting.svg" />
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. See notifications when you're close to your limits.</p>
          <img className="feature-icon" src="./public/images/icon-onboarding.svg" />
          <h3>Fast Onboarding</h3>
          <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          <img className="feature-icon" src="./public/images/icon-api.svg" />
          <h3>Open API</h3>
          <p>Manage your savings, investment, pension, and much more from one account. Tracking your money has never been easier.</p>
      </div>
    </div>
  );
};

export default Features;
