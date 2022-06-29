import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import  signin from "./Signin.module.css";
import { FormInput } from "./FormInputs";
import {  useDispatch } from "react-redux";
import { UserDetails } from "../../../Redux/UserSlice";
import {Validate} from './ValidateForm'

const Signin = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initial_values = {
    firstName : "",
    lastName : "",
    number : "",
    email : "",
    gender : "",
    city : "",
    agency : "",
    password : "",
  };
  const [values, setValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState("");
  const [submitErrMessage, setSubmitErrMessage] = useState("")

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
    setFormErrors(Validate(values));
  };

  useEffect(() => {
    setFormErrors(Validate(values));
  }, [values])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(values));

   if (Object.keys(formErrors).length === 0) {
    window.localStorage.setItem('user', JSON.stringify(values))
    const user = JSON.parse(window.localStorage.getItem('user'))
    dispatch(UserDetails(user))
    navigate('/properties')
   }
   else {
    setSubmitErrMessage('Enter valid inputs')
   }
    console.log(Object.keys(formErrors));
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
      {
        values[inputs.name] ?  <p style={{color : 'red'}}>{formErrors[inputs.name]}</p> : ''
      }
    </div>
  ));
  return (
    <>  
        <div className={`container`}>
    <div className={`text-center`}>
        <h1 style={{color : '#101828', fontWeight : '500'}} className="">Welcome</h1>
       <p className="">Welcome! Please enter your details</p>
       <p style={{color  :"red", fontSize : '2rem'}}>{submitErrMessage}</p>
    </div>
          <form
        onSubmit={handleSubmit}
        id="form-container"
        className="w-75 m-auto row g-2 justify-content-center"
      >
        {renderInputs}
        <div  className="col-md-5">
          <input type='checkbox' />
          <label htmlFor ='remember' className='ms-2'>Remember me for 30 days</label>
        </div>
        <div  className="col-md-5">
          <label htmlFor ='forgot'>Forgotten password</label>
        </div>
        <button type='submit' className={` ${signin.signin_btn} btn  btn-primary my-5 py-2 px-5`} onClick ={handleSubmit}>Create Account </button>

      </form>
    </div>
    </>
  );
};

export default Signin;
