import React from 'react';
import './Testimonials.css';
//import avataar1 from './images/avataar1.png';
//import avataar2 from './images/avataar2.png';
//import avataar3 from './images/avataar3.png';
//import avataar4 from './images/avataar4.png';

const testimonials = [
    {
      name: 'Riyaz.MD',
      role: 'Student',
      rating: 5,
      feedback: 'The Java training at Vision computers was great. The trainers explained everything very well.',
      //avatar: avataar4, // Use imported image
    },
    {
      name: 'Mamatha.K',
      role: 'Student',
      rating: 4,
      feedback: 'Python course was highly practical, right from the basics to advanced concepts.',
      //avatar: avataar2, // Use imported image
    },
    {
      name: 'Amulya .B',
      role: 'Student',
      rating: 5,
      feedback: 'Vision computers provided me Webdevelopment training with real world projects',
      //avatar: avataar3, // Use imported image
    },
    
  ];
  
  const Testimonials = () => {
    return (
      <div className="testimonials-container">
        <h2>Our Student Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-mark">"</div>
              <img src={item.avatar} alt={item.name} className="testimonials-avatar" />
              <h3>{item.name}</h3>
              <p className="role">{item.role}</p>
              <div className="stars">{'★'.repeat(item.rating)}</div>
              <p className="feedback">{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;