import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <h1>Hi There, I am Arnel Caparros</h1>
      <h2>UI/UX DESIGNER & WEB DEVELOPER</h2>

      <img src={profile} alt="My Profile" className="profile-img" />

      <div className="hero-buttons">
        <Link to="/design">
          <button className="hire-me">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="contact">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
