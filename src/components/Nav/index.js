import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  // State to control the Navbar collapse
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  // Function to close the Navbar when a nav item is clicked
  const closeNavbar = () => {
    if (navbarExpanded) {
      setNavbarExpanded(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Matrich
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavbarExpanded(!navbarExpanded)} // Toggle Navbar collapse state
          aria-controls="navbarTogglerDemo03"
          aria-expanded={navbarExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navbarExpanded ? 'show' : ''}`} // Add 'show' class when Navbar is expanded
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="link" to="about" onClick={closeNavbar}> {/* Close Navbar on click */}
                <a className="nav-link" href="#">
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="support" onClick={closeNavbar}> {/* Close Navbar on click */}
                <a className="nav-link" href="#">
                  Supported Living
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="adultcare" onClick={closeNavbar}> {/* Close Navbar on click */}
              <a className="nav-link" href="#">
                Specialist Adult Care
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Senior Living
              </a>
            </li>
          </ul>
          <Link className="link" to="contact">
            <button className="btn btn-dark enquire"  type="button" onClick={closeNavbar}>
              Make an Enquiry
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
