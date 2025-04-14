import React from 'react';
import './TrainingApproach.css'; // Import the CSS file
//import classtrain from './images/classtrain.jpeg';
import online from './images/online.jpeg';
import weekend from './images/weekend.jpeg';
import assignment from './images/assignment.jpeg';
import project from './images/project.jpeg';
import interview from './images/interview.jpeg';
import theory from './images/theory.jpeg';
import material from './images/material.jpeg';
import resume from './images/resume.jpeg';
import corporate from './images/corporate.jpeg';

function TrainingApproach() {
  return (
    <section className="training-section">
      <h2>TRAINING MODES</h2>
      <div className="training-grid">
        <div className="training-item">
          <img src={theory} alt="./images/theory.jpeg" className="training-icon" />
          <h3>Theory</h3>
          <p>In-depth theoretical understanding of concepts.</p>
        </div>
        <div className="training-item">
          <img src={project} alt="./imagesProject.jpeg" className="training-icon" />
          <h3>Project Work</h3>
          <p>Hands-on experience with real-world projects.</p>
        </div>
        <div className="training-item">
          <img src={assignment} alt="./images/assignments.jpeg" className="training-icon" />
          <h3>Assignments</h3>
          <p>Practical assignments to reinforce learning.</p>
        </div>
        <div className="training-item">
          <img src={interview} alt="./images/interview.jpeg" className="training-icon" />
          <h3>Interview Preparation</h3>
          <p>Training for successful job interviews.</p>
        </div>
        <div className="training-item">
          <img src={resume} alt="./images/resume.jpeg" className="training-icon" />
          <h3>Resume Preparation</h3>
          <p>Guidance in crafting effective resumes.</p>
        </div>
        <div className="training-item">
          <img src={material} alt="./images/material.jpeg" className="training-icon" />
          <h3>provides materials for better understanding</h3>
          <p>Helps in understanding the Depth of the Content.</p>
        </div>
        <div className="training-item">
          <img src={online} alt="./images/online.jpeg" className="training-icon" />
          <h3>Online Training</h3>
          <p>It helps to the students.</p>
        </div>
        <div className="training-item">
          <img src={weekend} alt="./images/Weekend.jpeg" className="training-icon" />
          <h3>Weekend Exams</h3>
          <p>Gain experience and modes of questions .</p>
        </div>
        <div className="training-item">
          <img src={corporate}   alt="./images/corporate.jpeg" className="training-icon" />
          <h3>Practical Training</h3>
          <p>Hands-on practical training with real world scenarios.</p>
        </div>
      </div>
    </section>
  );
}

export default TrainingApproach;