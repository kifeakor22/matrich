import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Herogrid from '../components/About';
import ServiceCards from '../components/services';

const Home = () => {
  return (
    <div>
      <Herogrid/>
      <ServiceCards/>
    </div>
  );
};

export default Home;