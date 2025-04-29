import React from 'react';
import './Design.css';

import loginImg from '../assets/login.jpg';
import calculatorImg from '../assets/calculator.jpg';
import prtfllImg from '../assets/prtfll.jpg';
import booksearchImg from '../assets/booksearch.jpg';
import enrollmentImg from '../assets/Simple-enrollment-Form.jpg';
import webPortfolioImg from '../assets/webPortfolio.jpg'; 

const Design = () => {
  return (
    <section id="design" className="design-section">
      <h2>My Designs</h2>
      <div className="design-cards">

        <div className="design-card">
          <img src={loginImg} alt="login" />
          <h3>Login Design</h3>
          <p>A Login & Register design </p>
          <button>View</button>
        </div>

        <div className="design-card">
          <img src={calculatorImg} alt="calculator" />
          <h3>Calculator</h3>
          <p>A calculator made program with python</p>
          <button>View</button>
        </div>

        <div className="design-card">
          <img src={prtfllImg} alt="portfolio" />
          <h3>Portfolio Design</h3>
          <p>A portfolio design</p>
          <button>View</button>
        </div>

        <div className="design-card">
          <img src={booksearchImg} alt="booksearch" />
          <h3>Book Search</h3>
          <p>A Search Bar that fetches books with pagination</p>
          <button>View</button>
        </div>

        {/* New - Simple Enrollment Form */}
        <div className="design-card">
          <img src={enrollmentImg} alt="Simple Enrollment Form" />
          <h3>Simple Enrollment Form</h3>
          <p>A basic enrollment form design for users.</p>
          <button>View</button>
        </div>

        {/* New - Web Portfolio */}
        <div className="design-card">
          <img src={webPortfolioImg} alt="Web Portfolio" />
          <h3>Web Portfolio</h3>
          <p>Portfolio website showcasing designs and projects.</p>
          <button>View</button>
        </div>

      </div>
    </section>
  );
};

export default Design;
