//import React from "react";
import "./ScrollingImages.css";
import pageone from './images/pageone.png';
import pagetwo from './images/pagetwo.png';

import React, { useEffect, useState } from "react";

const images = [pageone, pagetwo];

const ScrollingImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
    </div>
  );
};

export default ScrollingImages;
