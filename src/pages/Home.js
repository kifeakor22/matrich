import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Herogrid from '../components/About';
import ServiceCards from '../components/services';
import Contact from '../components/contact';
import SupportedLiving from '../components/supportedliving';
import SpecialistAdultCare from '../components/adultcare';
import Footer from '../components/footer';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div>
      <Herogrid/>
      <ServiceCards/>
      <SupportedLiving/>
      <Contact/>
    </div>
  );
};

export default Home;