import React from 'react'
// import './Login.module.css'
const Login = () => {
  return (
    <div className="login">
    <div className='container'>

     <form id='form-container' className='w-75 mx-auto row g-2 justify-content-center align-items-center'>
     <div className="welcome col-md-8 ">
        <h3 className="text-bold">Welcome</h3>
       <p className="">Welcome back! Please enter your details</p>
    </div>

       <div className="col-md-8 col-sm-12">
        <label htmlFor="" className="form-label">Email</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-8 col-sm-12">
        <label htmlFor="" className="form-label">Password</label>
        <input type="text" className="form-control" />
       </div>

       <div className="checkbox col-md-5">
        <input type="checkbox" className='me-2'  name="checkbox" id="checkbox" />
        <label htmlFor="" className=''>Remeber for 30 days</label>
    </div>
       <div className="forgot_password col-md-3 text-start">
        <p>Forgotten password</p>
       </div>
       <div className="button_container col-md-8 text-center">
        <button className="btn btn-primary  w-100 py-2 px-5 ">Sign in</button>
       </div>
</form>
</div>
</div>
  )
}

export default Login