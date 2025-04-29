import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <h1>Hi There, I am Arnel Caparros</h1>
      <h2>UI/UX DESIGNER & WEB DEVELOPER</h2>

      {}
      <img src={profile} alt="My Profile" className="profile-img" />

      <div className="hero-buttons">
        <a href="#design">
          <button className="hire-me">Projects</button>
        </a>
        <a href="#contact">
          <button className="contact">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
