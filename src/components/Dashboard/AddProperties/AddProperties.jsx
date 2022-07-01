import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar/Sidebar";
import { CgArrowLongLeft } from "react-icons/cg";
import properties from "./AddProperties.module.css";
import property_image from "../../../Assets/house.png";
const AddProperties = () => {
  const [property, setProperty] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <Sidebar />
      <div className={`${properties.property_container}`}>
        <div className={`${properties.search_container}`}>
          <div className={`${properties.property_search} w-75 input-group `}>
            <input type="search" name="" className="form-control" id="" />
            <div className="input-group-append d-inline">
              <span className="input-group-text  text-light bg-primary">
                search
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <CgArrowLongLeft size="3rem" />
          <h2 className={`${properties.profile_text} ms-4  text-primary`}>
            {" "}
            Edit properties
          </h2>
        </div>
        <h4 className="text-primary d-none fw-100">Upload Property Picture</h4>
        <div className={`${properties.properties_image}`}>
          <div className={`${properties.main_img_container}`}>
            <img
              src={property_image}
              className={`${properties.main_img}`}
              alt="img"
            />
          </div>
          <div className={`${properties.image_container}`}>
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
            <img
              src={property_image}
              alt="img"
              className={`${properties.property_image}`}
            />
          </div>
        </div>
        <h4 className="text-primary fw-100">Enter Correct Property Details</h4>

        <form
          id="form-container"
          className="w-100 my-3 row g-4 justify-content-start"
        >
          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Property Name
            </label>
            <input type="text" value={property} className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input
              type="email"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-10">
            <label htmlFor="" className="form-label">
              About the property
            </label>
            <textarea
              className="form-control"
              name="feedback"
              id=""
              cols="15"
              rows="8"
            ></textarea>
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input type="number" className="form-control" />
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Did you want to Sell Rent the property
            </label>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Rent
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Rent
              </label>
            </div>
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Property type
            </label>{" "}
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                House
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Hotel
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                land
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Relaxation
              </label>
            </div>
          </div>

          <div className="col-md-5">
            <label htmlFor="" className="form-label">
              Specification
            </label>{" "}
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Bathroom
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Toilet
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Waste Bin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Relaxation
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                Stable Light
              </label>
            </div>
          </div>
          <button className="btn btn-primary w-25 mx-auto">SAVE</button>
        </form>
      </div>
    </>
  );
};

export default AddProperties;
