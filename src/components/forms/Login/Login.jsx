import React, {useState} from 'react'
// import './Login.module.css'


const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleLogin = (e) => {
  e.preventDefault()
  const user = JSON.parse(localStorage.getItem('user'))
}
console.log(email)
console.log(password)
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
        <input type="text" value = {email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
       </div>

       <div className="col-md-8 col-sm-12">
        <label htmlFor="" className="form-label">Password</label>
        <input type="text" className="form-control" />
       </div>

       <div className="checkbox col-md-5">
        <input type="checkbox" value={password} onChange={(e) => setPassword(e.target.value)} className='me-2'  name="checkbox" id="checkbox" />
        <label htmlFor="" className=''>Remeber for 30 days</label>
    </div>
       <div className="forgot_password col-md-3 text-start">
        <p>Forgotten password</p>
       </div>
       <div className="button_container col-md-8 text-center">
        <button type='submit' onClick ={handleLogin} className="btn btn-primary  w-100 py-2 px-5 ">Sign in</button>
       </div>
</form>
</div>
</div>
  )
}

export default Login