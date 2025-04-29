import React, { useState } from 'react';
import './Header.css';  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <header>
      <div className="logo">
        <h1>MyPortfolio</h1>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
