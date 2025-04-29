import React from 'react';
import './About.css';
import self from '../assets/self.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {}
        <div className="about-image">
          <img src={self} alt="About Me" />
        </div>

        {}
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I'm Arnel Navorra Caparros, a 20-year-old student currently pursuing a Bachelor of Science in Information Technology at Dalubhasaan ng Lungsod ng Lucena. 
          I am a passionate web developer who loves building clean, beautiful, and functional websites. 
          And I’m constantly eager to learn and grow in the ever-evolving field of IT.
          Welcome to my portfolio!</p>
         
          <p>Aside from coding, I enjoy learning new tech trends, playing games, and exploring creativity through design!</p>

          <button className="about-button">Learn More</button>
        </div>

      </div>
    </section>
  );
};

export default About;
