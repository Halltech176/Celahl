import React, { Fragment, useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar-styles.css";
import Logo from "../../Logo/Logo.component";
import DarkLogo from "../../../Assets/DarkLogo.png";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  let size = window.innerWidth;
  if (size <= 600) {
    var display = "none";
  } else {
    var display = "block";
  }
  const AdjustSize = () => {
    size = window.matchMedia("(max-width : 600px").matches;
    size === true ? (display = "none") : (display = "block");
    setOpen(display);
  };
  const [open, setOpen] = useState(display);
  useEffect(() => {
    window.addEventListener("load", AdjustSize);
    window.addEventListener("resize", AdjustSize);
  }, [size]);

  const ToggleNavbar = () => {
    if (open === "none") {
      setOpen("block");
    } else {
      setOpen("none");
    }
  };
  // const logo =       {location.pathname === "/" ? (
  //   <Logo />
  // ) : (
  //   <img src={DarkLogo} alt="" />
  // )}

  console.log(location.pathname === "/", location.pathname);
  location.pathname !== "/"
    ? console.log("other")
    : console.log(location.pathname);
  return (
    <Fragment>
      <div className="navigate_btn bg-dark">
        <Logo />
        {open === "none" ? (
          <MdMenu
            color="white"
            size="2.5rem
    "
            onClick={ToggleNavbar}
          />
        ) : (
          <FaTimes
            color="white"
            size="2.5rem
    "
            onClick={ToggleNavbar}
          />
        )}
      </div>
      <div className="navbar_container">
        <nav
          style={{ display: open, top: "0", left: "0", alignItems: "center" }}
          className={
            location.pathname !== "/"
              ? "navbar navbar-expand-lg navbar-dark text-primary bg-transparent"
              : "navbar nav navbar-expand-lg navbar-dark bg-primary"
          }
          // navbar-expand-lg
          // navbar-light
        >
          <div className="container-fluid justify-content-between align-items-center">
            <div className="logo_container">
              {location.pathname === "/" ? (
                <Logo />
              ) : (
                <img src={DarkLogo} alt="" />
              )}
            </div>
            <div
              className="collapse navbar-collapse d-flex justify-content-md-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-lg-0 d-flex nav-pills">
                <li className="nav-list nav-item px-md-3">
                  <Link
                    className={
                      location.pathname !== "/"
                        ? "nav-link text-primary"
                        : "nav-link text-light"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-list nav-item px-md-3">
                  <Link
                    className={
                      location.pathname !== "/"
                        ? "nav-link text-primary"
                        : "nav-link text-light"
                    }
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-list nav-item px-md-3">
                  <Link
                    className={
                      location.pathname !== "/"
                        ? "nav-link text-primary"
                        : "nav-link text-light"
                    }
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-list nav-item px-md-3">
                  <Link
                    className={
                      location.pathname !== "/"
                        ? "nav-link text-primary"
                        : "nav-link text-light"
                    }
                    aria-current="page"
                    to="/faqs"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="nav-item  my-2 nav-btn">
                  <Link to="/login">
                    <button
                      className={
                        location.pathname !== "/"
                          ? "btn btn-outline-primary px-md-5 text-prmary"
                          : "btn btn-outline-light px-md-5 text-light bg-primary"
                      }
                    >
                      {" "}
                      Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item my-2 nav-btn">
                  <Link to="/signin">
                    <button
                      className={
                        location.pathname !== "/"
                          ? "btn btn-outline-primary px-md-5 text-prmary"
                          : "btn btn-outline-light px-md-5 text-light bg-primary"
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
      </div>
    </Fragment>
  );
}

export default Navbar;
