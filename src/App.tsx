import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
