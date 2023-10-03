import React from 'react';
import Home from './pages/Home';
// import Aboutus from './components/about/Aboutus';
// import BookingPage from './components/BookingPage';
import Contact from './components/contact';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className='App'>
    <Router>
        <Helmet>
          <title>Matrich</title>
        </Helmet>
       <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/*<Route path="/about" element={<Aboutus/>} />
        <Route path="/booking" element={<BookingPage/>} >*/}
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;