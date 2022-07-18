import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import login from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const errorNotification = () => {
    toast.error("Please enter valid email and password");
    setPassword("");
    setEmail("");
  };
  const hist = window.history;
  useEffect(() => {
    window.addEventListener("popstate", () => {
      hist.pushState(null, null, navigate("/login"));
      errorNotification();
    });
  }, [hist]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    user.email === email && user.password === password
      ? navigate("/properties")
      : errorNotification();
  };

  return (
    <div className="login my-5">
      <ToastContainer transition={Zoom} autoClose={800} />

      <div className="container">
        <form
          id="form-container"
          className={`${login.login_container} row  g-3 mx-auto align-items-center justify-content-center`}
        >
          <div className="welcome text-left col-12 ">
            <h4 className={`${login.heading_text}`}>Welcome back</h4>
            <p className={`${login.welcome_text}`}>
              Welcome back! Please enter your details
            </p>
          </div>
          <div className="col-12">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-12">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div
            className={`${login.verify} col-md d-flex justify-content-between`}
          >
            <div className="checkbox ">
              <input
                type="checkbox"
                value={password}
                className="me-2"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="" className="">
                Remeber for 30 days
              </label>
            </div>
            <div className="forgot_password">
              <p>Forgotten password</p>
            </div>
          </div>
          <div className="button_container col-md-12  text-center">
            <button
              type="submit"
              onClick={handleLogin}
              className={`${login.login_btn} w-100 btn btn-primary py-2 px-5`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
