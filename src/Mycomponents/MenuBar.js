import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'; // Import the CSS
import visionlogo from './images/visionlogo.png';


const MenuBar = () => {
  return (
    <header className="header">
          <div className="left-section">
            <img src={visionlogo} alt="./images/visionlogo.png" className="logo" />
          </div>
    <nav className='menu-bar'>
      <ul>
      <li><Link to="/">HOME</Link></li> 
        <li><Link to="/Courses">COURSES</Link></li>
        <li><Link to="/AboutUs">ABOUTUS</Link></li>
        <li><Link to="/Contact">CONTACT</Link></li>
      </ul>
    </nav>
    
    </header>
  );
};

export default MenuBar;
