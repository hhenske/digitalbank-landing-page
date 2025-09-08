import React, { useEffect } from "react";
import './MobileMenu.css';


interface MobileMenuProps {
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMenu }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [toggleMenu]);

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="mobile-menu-overlay" 
        onClick={toggleMenu}
      />
      
      {/* Menu Container */}
      <div className="mobile-menu-container">
        <nav className="mobile-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;