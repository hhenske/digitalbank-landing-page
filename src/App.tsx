import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="hero-section">
        <div className="feature-header">
          <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      <Features menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <Articles />
      <Footer />
    </>
  );
}

export default App;