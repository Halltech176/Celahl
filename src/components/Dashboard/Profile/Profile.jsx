import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import profile from "./Profile.module.css";
import { useSelector } from "react-redux";
import male_avatar from "../../../Assets/male.png";
import female_avatar from "../../../Assets/female.png";
import Sidebar from "../../Common/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
const Profile = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  let userAvatar;
  if (user.gender === "male") {
    userAvatar = male_avatar;
  } else {
    userAvatar = female_avatar;
  }
  const Back = () => {
    console.log("fmldmfol");
    navigate("/properties");
  };

  const handleChange = (e) => {
    e.preventDefault();
    navigate("/properties");
  };
  return (
    <>
      <Sidebar />
      <div className={`${profile.profile_container}`}>
        <div className="d-flex align-items-center">
          <div>
            <CgArrowLongLeft onClick={Back} size="3rem" />
          </div>
          <h2 className={`${profile.profile_text} ms-4  text-primary`}>
            Edit Profile
          </h2>
        </div>

        <img
          src={userAvatar}
          alt="user-proflle"
          className={`${profile.profile_image}`}
        />

        <form id="form-container" className="w-75 container  row g-2 ">
          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Last name
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Phone Number
            </label>
            a
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              E-mail
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              City/Town
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Name of Organization/Agency
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-20">
            <h4>Change Password</h4>
            <div className="small text-secondary">
              Please enter your current password to change your password
            </div>
          </div>

          <div className="col-md-5 col-xs-10">
            <label htmlFor="" className="form-label">
              New Password
            </label>
            <input type="password" className="form-control" />
          </div>

          <div className="col-md-5 col-xs-10">
            <label htmlFor="" className="form-label">
              Old password
            </label>
            <input type="password" className="form-control" />
          </div>

          <div className="d-flex justify-content-center my-5 col-md-12 text-center">
            <button
              className="btn btn-primary py-2 px-5"
              onClick={handleChange}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
