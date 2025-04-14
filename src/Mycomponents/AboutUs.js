import React from 'react';
import './AboutUs.css';
import blurr from './images/blurr.jpeg'; // Replace with your blurred imagei // Replace with your content image
import vision7 from './images/vision7.jpeg';
import './Testimonials.js'
import Testimonials from './Testimonials.js';
const AboutUs = () => {
  return (
    <div className="about-container">

      {/* Heading Bar */}
      <div className="about-heading" style={{ backgroundImage: `url(${blurr})` }}>
        <div className="overlay">
          <h1>About Us</h1>
          <p>Home &gt; ABOUT US</p>
        </div>
      </div>

      {/* Content Box */}
      <div className="about-box">
        <div className="about-text">
          <h2>Welcome to Vision Computers</h2>
          <p>
            Vision Computers is a leading computer training institute committed to nurturing technical excellence. 
            Since our inception, we have empowered thousands of learners to build successful careers in the tech industry. 
            <br /><br />
            We offer a wide range of professional courses including Programming Languages (C, C++, Java, Python), 
            Web Development, MS Office, Tally, and more. Our trainers are industry experts focused on delivering 
            practical knowledge through hands-on sessions and real-time projects.
            <br /><br />
            At Vision Computers, your success is our vision.
          </p>
        </div>
        <div className="about-img">
          <img src={vision7} alt="./images/vision7.jpeg" />
        </div >
        <div lassName="about-container">
          {
            <Testimonials/>
          }
        </div>
  </div>
      </div>

    
  );
};

export default AboutUs;
