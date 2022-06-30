import React, { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar-styles.scss";
import Logo from '../../Logo/Logo.component'
import DarkLogo from '../../../Assets/DarkLogo.png'

function Navbar() {
  const location = useLocation();
  // console.log(
  //   location
  // );
  // constlocation = window.location;
  console.log(location.pathname === '/', location.pathname);
 location.pathname !== '/'? console.log('other'): console.log(location.pathname)
  return (
    <Fragment>
      <nav
        className={
         location.pathname !== '/'
            ? "navbar navbar-expand-lg navbar-dark text-primary bg-transparent"
            : "navbar nav navbar-expand-lg navbar-dark bg-primary"
        }
        
        // navbar-expand-lg
        // navbar-light
        style={{ top: "0", left: "0" }}
      >
        <div className="container-fluid justify-content-between">
         {
          location.pathname === '/'? <Logo />: <img src={DarkLogo} alt="" />
         }
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-md-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 d-flex nav-pills">
              <li className="nav-item px-md-3">
                <Link
                  className={
                   location.pathname !=='/'
                      ? "nav-link active"
                      : "nav-link active text-light"
                  }
                 
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                   location.pathname !== '/'
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
                
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                   location.pathname !== '/'
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
               
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link
                  className={
                   location.pathname !== '/'
                      ? "nav-link text-primary"
                      : "nav-link text-light"
                  }
                  aria-current="page"
                  to="/faqs"
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item px-md-3">
                <Link to ='/login'>
                <button
                  className={
                   location.pathname !== '/'
                      ? "btn btn-outline-primary px-md-5 text-prmary"
                      : "btn btn-outline-light px-md-5 text-light bg-primary"
                  }
                >  Login
                </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to ='/signin'>
                <button
                  className={
                   location.pathname !== '/'
                      ? "btn btn-outline-primary px-md-5 text-primary"
                      : "btn btn-outline-light px-md-5 text-primary btn-light"
                  }
                >
                  Create Account
                </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
