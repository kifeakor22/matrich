import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg'


const Nav = () => {


    return(
        <>
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
            <a className="navbar-brand" href="/">Matrich</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#">About Us</a>
            <a className="nav-link" href="#">Supported Living</a>
          <a className="nav-link" href="#">Specalist Adult Care</a>
          <a className="nav-link" href="#">Senior Living</a>
        </div>
        <Link className='link' to='contact'>
         <button className='nav-item ml-auto btn btn-dark enquire' type='button' >Make  an Enquiry</button>
         </Link>
      </div>
     
    </nav>
    </div>
  </>
    )
     
}

export default Nav