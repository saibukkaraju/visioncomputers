import React from 'react';
import './OurVision.css';
import vision4 from './images/vision4.jpeg'; // replace with your actual image path

const OurVision = () => {
  return (
    <div className="our-vision-box">
      <div className="vision-text">
        <h2>Our Vision</h2>
        <p>
          Vision Computers is one of the leading computer training institutes, committed to empowering students with
          industry-relevant skills and practical knowledge.
          <br /><br />
          We provide expert-led training in Full Stack Development, Programming (C, C++, Java, Python), Web Technologies
          (HTML, CSS, JavaScript, React), MS Office, Tally, and more. Our goal is to prepare every student for a
          successful IT career with hands-on projects and placement support.
          <br /><br />
          Join us and build a strong foundation in IT with Vision Computers!
        </p>
        
      </div>
      <div className="vision-image">
        <img src={vision4} alt="./images/vision4.jpeg" />
      </div>
    </div>
  );
};

export default OurVision;