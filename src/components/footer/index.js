import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={require('./images/logo.jpg')} alt="Company Logo" />
          <h2>Matrich</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <Link className="link" to="about">
            <li><a href="/about">About Us</a></li>
             </Link>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DevAlter.io All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
