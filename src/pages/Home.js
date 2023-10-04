import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Herogrid from '../components/About';
import ServiceCards from '../components/services';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Herogrid/>
      <ServiceCards/>
      <Footer/>
    </div>
  );
};

export default Home;