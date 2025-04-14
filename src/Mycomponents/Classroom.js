import React from 'react';
import './Classroom.css'; 
import classroom from './images/classroom.webp';
import classroom1 from './images/classroom1.webp';

const Classroom = () => {
  return (
    <div className="learning-modes-container">
      <div className="mode-card">
        
        <h3 className="mode-title">Live Online</h3>
        <p className="mode-description">
          Attend interactive live online instructor-led classes from the comfort of your home
        </p>
      
        <img src={classroom1} alt="./images/classroom1.webp" className="mode-image" />
      </div>

      <div className="mode-card">
      
        <h3 className="mode-title">Classroom</h3>
        <p className="mode-description">
          Learn physically at Vision computers at kodad also learn hands on experience.
        </p>
         
        <img src={classroom} alt="./images/classroom.webp" className="mode-image" />
      </div>
    </div>
  );
};

export default Classroom;