import React, { Component } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import Sidebar from "./components/Common/Sidebar/Sidebar";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Profile from "./components/pages/Profile/Profile";

import Properties from "./components/Dashboard/Properties/Properties";
import AddProperties from "./components/Dashboard/AddProperties/AddProperties";
import Notifications from "./components/Dashboard/Notifications/Notifications.component";
import Overview from "./components/Dashboard/Overview/Overview";
import Plan from "./components/Dashboard/Account_plan/Plan.component";

import Contact from "./components/forms/Contact/Contact";
import Signin from "./components/forms/Signin/Signin";
import Login from "./components/forms/Login/Login";
import Faq from "./components/forms/Faq/Faq";
import RequireAuth from "./Redux/RequireAuth";
// import Plan from "./components/Account_plan/Plan.component";
// import MakePayment from './components/forms/Payment/MakePayment';
// import OTP from './components/OTP/OTP';
// import Notifications from "./components/pages/Notifications/Notifications.component";
import Result from "./components/Results/Result.component";
import "./App.css";
import NoMatch from "./components/routes/NoMatch";

// import {ContextProvider} from './Context/UserContext'

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className="project-container">
        {path === "/about" ||
        path === "/faqs" ||
        path === "/" ||
        path === "/login" ||
        path === "/signin" ||
        path === "/contact" ? (
          <Navbar />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/addproperty" element={<AddProperties />} />
          <Route path="/upgrade" element={<Plan />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/require" element={<RequireAuth />} />
          {/* <Route path='/Make_payment' element={<MakePayment/>}/>
        <Route path='/OTP_Verify' element={<OTP/>}/> */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {path === "/" ||
        path === "/about" ||
        path === "/faqs" ||
        path === "/contact" ? (
          <Footer />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
