import React from 'react';
import './ServiceCards.css'; // Import your CSS for styling
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  // Data for the service cards
  const services = [
    {
      id: 1,
      title: 'Supported Living',
      description: 'Our services are tailored to empower individuals with diverse support needs to maintain their independence within the comfort of their own homes..',
      color: '#FF5733', // Background color for Service 1
    },
    {
      id: 2,
      title: 'Specialist Adult Care',
      description: 'Experience individualized care that empowers and supports adults with unique needs. Our dedicated team is committed to enhancing the quality of life for every individual we serve. Choose Specialist Adult Care with us today.',
      color: '#33FF77', // Background color for Service 2
    },
    {
      id: 3,
      title: 'Senior Living',
      description: 'Embrace your golden years with Matrich Senior Living. Our enriching environment and personalized care create a vibrant retirement experience you will love.',
      color: '#3344FF', // Background color for Service 3
    },
    {
      id: 4,
      title: 'Learning Disability',
      description: 'Discover personalized support that empowers individuals with learning disabilities. Matrich enables independence and growth.',
      color: '#FF33DD', // Background color for Service 4
    },
  ];

  return (
    <div className="service-cards-container">
      {services.map((service) => (
        <div
          key={service.id}
          className="service-card"
          style={{ backgroundColor: service.color }}
        >
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <Link className="link" to="contact">
          <button className="enquire-button">Enquire Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
