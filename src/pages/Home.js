import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Herogrid from '../components/About';
import ServiceCards from '../components/services';
import Contact from '../components/contact';
import SpecialistAdultCare from '../components/adultcare';


const Home = () => {
  return (
    <div>
      <Herogrid/>
      {/* Add the parent-container class here to wrap ServiceCards */}
      <div className="parent-container">
        <ServiceCards />
      </div>
      <SpecialistAdultCare/>
      <Contact/>
    </div>
  );
};

export default Home;
