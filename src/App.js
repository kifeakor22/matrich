import React from 'react';
import Home from './pages/Home';
import TopHeader from './components/topheader';
import Contact from './components/contact';
import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './components/footer';
import SupportedLiving from './components/supportedliving';
import SpecialistAdultCare from './components/adultcare';
import './App.css'; // Import your custom CSS for styling

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Helmet>
          <title>Matrich</title>
        </Helmet>
        <TopHeader />
        <Nav />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/support' element={<SupportedLiving/>}/>
            <Route path='/adultcare' element={<SpecialistAdultCare/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
