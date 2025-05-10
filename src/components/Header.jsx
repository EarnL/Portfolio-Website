import React, { useState } from 'react';
import './Header.css';  
import { Link } from 'react-router-dom';

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
