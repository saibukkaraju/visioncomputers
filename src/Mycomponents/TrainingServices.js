import React from 'react';
import './TrainingServices.css';
import CourseModules from './CourseModules';
//import Footer from './Footer';
import basicCs from './images/basicCS.jpeg';
import c from './images/c.png';
import cplus from './images/cplus.jpeg';
import java1 from './images/java1.png';
import python from './images/python.jpeg';
import react1 from './images/react1.jpeg';
import django from './images/django.jpeg';
import html2 from './images/html2.jpeg';
import css2 from './images/css2.jpeg';
import js1 from './images/js1.png';
import interviewskills from './images/interviewskills.jpeg';
import msoffice from './images/ms office.jpeg';
import blurr from './images/blurr.jpeg';



const services = [
  { name: 'BASIC COMPUTER SKILLS', image: basicCs},
  { name: 'MSOFFICE', image: msoffice },
  { name: 'C++', image: cplus},
  { name: 'C', image: c },
  { name: 'JAVA', image: java1 },
  { name: 'PYTHON', image: python },
  { name: 'REACT', image: react1 },
  { name: 'DJANGO', image: django },
  { name: 'HTML', image: html2 },
  { name: 'CSS', image: css2},
  { name: 'JS', image: js1 },
  { name: 'INTERVIEWSKILLS', image: interviewskills },
];

const TrainingServices = () => {
  return (
    <div className="about-container">

    {/* Heading Bar */}
    <div className="about-heading" style={{ backgroundImage: `url(${blurr})` }}>
      <div className="overlay">
        <h1>COURSES</h1>
        <p>HOME &gt; COURSES</p>
      </div>
    </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-title">{service.name}</div>
          </div>
        ))}
      </div>
      <div className='CourseModule-section'>
        <CourseModules/>
        
      </div>
       
    </div>
  );
};

export default TrainingServices;