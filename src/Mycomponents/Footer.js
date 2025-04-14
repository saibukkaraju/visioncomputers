import React from 'react';
import './Footer.css';
import visionlogo from './images/visionlogo.png'; // Update this path as per your project

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Box: Logo and Institute Info */}
      <div className="footer-section">
        <div className="footer-logo">
          <img src={visionlogo} alt="./images/visionlogo.png" className="logo-image" />
          <div>
            <div className="footer-title">VISION</div>
            <div className="footer-subtitle">COMPUTERS</div>
          </div>
        </div>
        <p className="footer-text">
          Recognized by the Govt. of A.P.<br />
          and an ISO 9001:2015 certified institute
        </p>
      </div>
        {/* Quick Links */}
        <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Verify</li>
        </ul>
      </div>

      {/* Location + Contact */}
      <div className="footer-section">
        <h3>Location</h3>
        <p>V.R.C. Center<br />Near Muthukuru Bus Stand,<br />Nellore – 524001.</p>
        <h3>Contact Us</h3>
        <p>0861-2306523<br />9032452904</p>
      </div>
    </div>
  );
  
};

export default Footer;

