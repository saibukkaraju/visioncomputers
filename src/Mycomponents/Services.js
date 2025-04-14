import React, { useState } from 'react';
import './Services.css'; // Import the CSS file

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { name: 'Basic Computer Skills', description: 'Learn fundamental computer skills including MS Office and typing.' },
    { name: 'Web Development', description: 'Build dynamic websites and web applications with modern technologies.' },
    { name: 'Programming', description: 'Master programming languages like Python, JavaScript, and more.' },
    { name: 'Graphic Design', description: 'Create stunning visuals and designs for digital and print media.' },
    { name: 'Data Entry & Office Automation', description: 'Streamline office tasks and improve productivity with automation tools.' },
    { name: 'Corporate Training', description: 'Customized training solutions for businesses to enhance employee skills.' },
    { name: 'Classroom Training', description: 'Interactive and engaging learning experience in a traditional classroom setting.' },
    { name: 'Online Training', description: 'Flexible and convenient learning from the comfort of your own space.' },
    { name: 'Interview Skills', description: 'Prepare for job interviews with confidence and land your dream job.' },
  ];

  return (
    <div className="services-container">
      <h1>Our Training Services</h1>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-item"
            onMouseEnter={() => setHoveredService(service)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {service.name}
          </div>
        ))}
      </div>

      {/* Static Info Box */}
      <div className="service-info-box">
        {hoveredService ? (
          <div>
            <h2>{hoveredService.name}</h2>
            <p>{hoveredService.description}</p>
          </div>
        ) : (
          <h2>Hover over a service to see details</h2>
        )}
      </div>

      
    </div>
  );
};

export default Services;
