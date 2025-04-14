import React from 'react';
import './Scrollcourses.css';
import python from './images/python.jpeg';
import java1 from './images/java1.png';
import html2 from './images/html2.jpeg';
import css2 from './images/css2.jpeg';
import react1 from './images/react1.jpeg';
import django from './images/django.jpeg';
import basicCS from './images/basicCS.jpeg';
import interviewskills from './images/interviewskills.jpeg';
import js1 from './images/js1.png';
import c from './images/c.png';
import cplus from './images/cplus.jpeg';
import msoffice from './images/ms office.jpeg';


const Scrollcourses = () => {
    return (
      
        <div className="marquee-content">
          
          <div className="course-box">
        
            <img src={java1} alt="/images/java1.png" />
            <p>Java</p>
          </div>
          <div className="course-box">
            <img src={msoffice } alt="./images/ms office.jpeg" />
            <p>ms Office</p>
          </div>
          <div className="course-box">
            <img src={cplus} alt="./images/cplus.jpeg'" />
            <p>c++</p>
          </div>
          <div className="course-box">
            <img src={c} alt="./images/c.png" />
            <p>C</p>
          </div>
          <div className="course-box">
            <img src={js1} alt="./images/js1.png" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="course-box">
            <img src={basicCS} alt="./images/basicCS.jpeg" />
            <p>BASIC COMPUTER SKILLS</p>
          </div>
          
          <div className="course-box">
            <img src={django} alt="./images/django.jpeg" />
            <p>DJANGO</p>
          </div>
          
            
            <div className="course-box">
            <img src={interviewskills} alt="/images/interviewskills.jpeg"/>
            <p>INTERVIEWSKILLS</p>
            </div>
            <div className="course-box">
            <img src={react1} alt="./images/react1.jpeg"/>
            <p>REACT</p>
            </div>
            <div className="course-box">
            <img src={html2} alt="./images/html2.jpeg"/>
            <p>HTML</p>
            </div>
            <div className="course-box">
            <img src={css2} alt="/images/css2.jpeg"/>
            <p>CSS</p>
            </div>
            <div className="course-box">
            <img src={python} alt="/images/python.jpeg"/>
            <p>CSS</p>
            </div>


          </div>
       
    
    );
};
      
   
  export default Scrollcourses;