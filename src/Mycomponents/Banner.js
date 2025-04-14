import React from 'react';
import './Banner.css';
import banner2 from './images/banner2.jpeg'; // adjust if your image path is different

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner2} alt="./images/banner2.jpeg" className="banner2" />
    </div>
  );
};

export default Banner;
