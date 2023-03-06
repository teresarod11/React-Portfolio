import React from 'react';
import Navbar from './Navbar';
// import Header from './pages/Header';
import Footer from './pages/Footer';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';


function PortfolioContainer() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
      
      {/* <Header />
      
      
       */}
      {/* Other page content goes here */}
    </div>
  );
}

export default PortfolioContainer;
