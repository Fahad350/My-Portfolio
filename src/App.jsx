import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";

import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
