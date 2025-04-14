import React from 'react';
import './Contact.css';
import blurr from './images/blurr.jpeg';
import './TrainingApproach.js';
import TrainingApproach from './TrainingApproach.js';
import Footer from './Footer.js';
import location from './images/location.png';
import call from './images/call.png';
import email from './images/email.png';
import vision8 from './images/vision8.jpeg';



function Contact() {
  return (
          <div className="about-container">
          
                {/* Heading Bar */}
                <div className="about-heading" style={{ backgroundImage: `url(${blurr})` }}>
                  <div className="overlay">
                    <h1>CONTACT US</h1>
                    <p>Home &gt; CONTACT US</p>
                  </div>
                </div>
  
    <section className="contact-section">
      <div className="image-container">
        <img src={vision8} alt="./images/vision8.jpeg" className="mailbox-image" />
      </div>
      <div className="contact-details">
       
        <div className="contact-box">
          <img src={location} alt="" className="contact-icon" />
          <p>V.R.C. Center, Near Muthukuru Bus Stand, Nellore</p>
        </div>
        <div className="contact-box">
          <img src={call}alt="./images/call.png" className="contact-icon" />
          <p>9989309198 <br /> 9032452904</p>
        </div>
        <div className="contact-box">
          <img src={email} alt="./images/email.pn" className="contact-icon" />
          <p>catcomputerpoint@gmail.com</p>
        </div>
      </div>
    </section>
     <div className="contact-container">
              {
                <TrainingApproach/>
              
              }
            </div>
            <div className='Footer-container'>
              <Footer/>
            </div>
            
    </div>
  );
};

export default Contact;