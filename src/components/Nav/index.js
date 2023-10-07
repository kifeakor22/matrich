import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Updated import path
import './style.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"> {/* Wrap the navbar content in a container */}
          <a className="navbar-brand" href="/">
            Matrich
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse" // Use 'data-bs-toggle' for Bootstrap 5
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto"> {/* Use 'ul' for list of links */}
              <li className="nav-item">
                <Link className="link" to="about">
                <a className="nav-link" href="#">
                  About Us
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="support">
                <a className="nav-link" href="#">
                  Supported Living
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Specialist Adult Care
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Senior Living
                </a>
              </li>
            </ul>
            <Link className="link" to="contact">
              <button className="btn btn-dark enquire" type="button">
                Make an Enquiry
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
