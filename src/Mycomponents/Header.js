import React from 'react';
import './Header.css'; // Optional: For styling
//import visionlogo from './images/visionlogo.png';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img src={visionlogo} alt="./images/visionlogo.png" className="logo" />
      </div>
      </header>
  );
};
export default Header();   