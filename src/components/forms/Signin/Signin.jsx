import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Signin.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {UserDetails} from '../../../Redux/UserSlice'

const Signin = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('male')
  const [checked, setChecked] = useState(false)


  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(UserDetails(firstName))
  // }, [firstName])

  // const selector = useSelector((state) => state)
  // const handleLogin = () => {
  //   console.log(selector)
  //   // dispatch(userDetails(firstName))
  // }


  // const auth = useAuth()
  // const navigate = useNavigate()

  // const handleLogin = () => {
  //   auth.Login(firstName)
  //   navigate('/profile')
  // }

  return (
    <div className="signup">
    <div className='container'>
    <div className="welcome text-center">
        <h1 className="text-bold">Welcome</h1>
       <p className="">Welcome! Please enter your details</p>
    </div>

     <form id='form-container' className='w-75 m-auto row g-2 justify-content-center'>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">First Name</label>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Last name</label>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Phone Number</label>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} step='none' className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">E-mail</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Gender</label>
        <select type="text" value={gender} onChange={e => setGender(e.target.value)} className="form-select">
          <option value="male"> male</option>
          <option  value="female">female</option>
        </select>
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">City/Town</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Name of Organization/Agency</label>
        <input type="text" className="form-control" />
       </div>


       <div className="col-md-5 col-xs-10">
        <label htmlFor="" className="form-label">Create Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
       </div>
    
    <div className="checkbox col-md-5 col-xs-10">
        <input type="checkbox" checked={checked} onChange={e =>setChecked(e.target.value)}  name="checkbox" id="checkbox" />
        <label htmlFor="" className='px-1'>Remeber for 30 days</label>
    </div>
       <div className="forgot_password col-md-5 text-start">
        <p>Forgotten password</p>
       </div>
       <div className="d-flex justify-content-center col-md-12 text-center">
     <button className="btn btn-primary py-2 px-5">Create Account </button>
       </div>
     </form>
    </div>
    </div>
  )
}

export default Signin 