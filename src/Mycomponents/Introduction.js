import React from "react";
import "./Introduction.css"; // Import CSS for styling

//import vision4 from "./images/vision4.jpeg"; // Replace with your image path

const Introduction = () => {
  return (
    //<div className="intro-wrapper">
      //<div className="intro-image">
        //<img src={vision4} alt="./images/vision4.jpeg"/>
      //</div>
    
    
      <div className="intro-box">
        <div className="scroll-content">
          <h2>Why Choose Vision Computers Institute?</h2>
          <ul>
            <li>
              Empowering students with industry-relevant skills to excel in their careers.
            </li>
            <li>
              State-of-the-art facilities and expert instructors for quality learning.
            </li>
            <li>
              Strong focus on practical training and real-world projects.
            </li>
            <li>
              Programs in software development, networking, cybersecurity, and data science.
            </li>
            <li>
              Internship opportunities to make students job-ready and confident.
            </li>
          </ul>
          <p className="closing-note">
        Whether you're a student, job seeker, or working professional – we have the right course to elevate your career.
      </p>

        </div>
      </div>
     // </div>

  );
};

export default Introduction;