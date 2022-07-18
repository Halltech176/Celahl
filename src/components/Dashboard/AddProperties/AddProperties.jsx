import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar/Sidebar";
import { CgArrowLongLeft } from "react-icons/cg";
import properties from "./AddProperties.module.css";
import property_image from "../../../Assets/house.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import searchBtn from "../../../Assets/SearchVector.png";

const AddProperties = () => {
  const [property, setProperty] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };
  return (
    <>
      <Sidebar />
      <div className={`${properties.property_container}`}>
        <div className="row">
          <div className={`${properties.search_container}`}>
            <div>
              <input className="form-control" placeholder="search" />
              <span>
                <img src={searchBtn} />
              </span>
            </div>
          </div>
          {/* <div></div> */}
          <div className="col-md-8 d-flex align-items-center">
            <CgArrowLongLeft size="3rem" onClick={Back} />
            <h2 className={`${properties.profile_text} ms-4  text-primary`}>
              {" "}
              Edit properties
            </h2>
          </div>
          <h4 className="text-primary my-4">Upload Property Picture</h4>
          <div className={`${properties.properties_image} m3-4`}>
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
          <h5 className="text-primary fw-100">
            Enter Correct Property Details
          </h5>

          <form
            id="form-container"
            className="w-100 my-3 px-5 row g-4 justify-content-start"
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
            <div className="d-flex justify-content-center mx-auto">
              <Link to="/properties">
                {" "}
                <button className="btn btn-primary px-5">SAVE</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProperties;
