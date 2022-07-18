import React from 'react'
import {CgArrowLongLeft} from 'react-icons/cg'
import profile from './Profile.module.css'
import profile_image from "../../../Assets/profile_image.png"
import Sidebar from '../../Common/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
const Profile = () => {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <>
    <Sidebar/>
    <div className={`${profile.profile_container}`}>
<div className='d-flex align-items-center'>
    <CgArrowLongLeft size='3rem'/>
    <h2  className={`${profile.profile_text} ms-4  text-primary`}> Edit Profile</h2>
   </div>

   <img src={profile_image} alt="user-proflle" className={`${profile.profile_image}`} />

   <form id='form-container' className='w-75 container  row g-2 '>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">First Name</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Last name</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Phone Number</label>a
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">E-mail</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Gender</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">City/Town</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-5">
        <label htmlFor="" className="form-label">Name of Organization/Agency</label>
        <input type="text" className="form-control" />
       </div>

       <div className="col-md-20">
        <h4>Change Password</h4>
        <div className="small text-secondary">Please enter your current password to change your password</div>
       </div>

       <div className="col-md-5 col-xs-10">
        <label htmlFor="" className="form-label">New Password</label>
        <input type="password" className="form-control" />
       </div>

       <div className="col-md-5 col-xs-10">
        <label htmlFor="" className="form-label">Old password</label>
        <input type="password" className="form-control" />
       </div>

       <div className="d-flex justify-content-center my-5 col-md-12 text-center">
        <button className="btn btn-primary py-2 px-5  ">Save</button>
       </div>
       </form>
    </div>
    </>
  )
}

export default Profile