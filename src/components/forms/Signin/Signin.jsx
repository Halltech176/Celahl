import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signin from "./Signin.module.css";
import { FormInput } from "./FormInputs";
import { useDispatch } from "react-redux";
import { UserDetails } from "../../../Redux/UserSlice";
import { Validate } from "./ValidateForm";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorNotification = () => toast.error("Please enter valid inputs");
  const initial_values = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    gender: "female",
    city: "",
    agency: "",
    password: "",
  };
  const initial_checked = {
    check_state: true,
  };
  const [values, setValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState("");
  const [checked, setChecked] = useState(initial_checked);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFormErrors(Validate(values));
  };

  const handleCheck = () => {
    if (checked.check_state) {
      setChecked({ ...checked, check_state: false });
    } else {
      setChecked({ ...checked, check_state: true });
    }
  };
  const userInputs = Object.assign(values, checked);
  useEffect(() => {
    setFormErrors(Validate(values));
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(values));
    if (Object.keys(formErrors).length === 0) {
      window.localStorage.setItem("user", JSON.stringify(userInputs));
      const user = JSON.parse(window.localStorage.getItem("user"));
      dispatch(UserDetails(user));
      navigate("/properties");
    } else {
      errorNotification();
    }
  };

  const renderInputs = FormInput.map((inputs, index) => (
    <div key={index} className="m-1 col-md-5">
      <label htmlFor="" className="form-label">
        {inputs.label}
      </label>
      <input
        required
        type={inputs.type}
        name={inputs.name}
        className="form-control"
        onChange={handleChange}
        value={values[inputs.name]}
      />
      {values[inputs.name] ? (
        <p style={{ color: "red" }}>{formErrors[inputs.name]}</p>
      ) : (
        ""
      )}
    </div>
  ));
  return (
    <>
      <ToastContainer Zoom={true} autoClose={800} />
      <div className={`container`}>
        <div className={`text-center`}>
          <h1 style={{ color: "#101828", fontWeight: "500" }} className="">
            Welcome
          </h1>
          <p className="">Welcome! Please enter your details</p>
        </div>
        <form
          onSubmit={handleSubmit}
          id="form-container"
          className="w-75 m-auto row g-2 justify-content-center"
        >
          {renderInputs}
          <div className="col-md-5">
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              className="w-100 my-4 p-2"
              id=""
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div className="col-md-5">
            <input
              type="checkbox"
              checked={checked.check_state}
              name="checkbox"
              onChange={handleCheck}
            />
            <label htmlFor="remember" className="ms-2">
              Remember me for 30 days
            </label>
          </div>
          <div className="col-md-5">
            <label htmlFor="forgot">Forgotten password</label>
          </div>
          <button
            type="submit"
            className={` ${signin.signin_btn} btn  btn-primary my-5 py-2 px-5`}
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
