import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
import ContactMe from './components/pages/ContactMe';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import { Element } from "react-scroll";

function App() {
  return (
    <div>
        <Navbar />
      <Element name="AboutMe">
        <AboutMe />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="ContactMe">
        <ContactMe />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;



