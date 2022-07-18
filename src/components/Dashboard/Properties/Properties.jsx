import React from "react";
import Sidebar from "../../Common/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import properties from "./Properties.module.css";
import property_image from "../../../Assets/house.png";
import searchBtn from "../../../Assets/SearchVector.png";
// import searchholder from "../../../Assets/searchholder.png";
import Property_details from "./Properties_data.json";

const Properties = () => {
  const datas = Property_details.map((data, index) => {
    return (
      <Link key={index} to="/addproperty">
        <div className={`${properties.image_container}`}>
          <span
            className={`${
              data.property_tag === "For Sell"
                ? properties.sell_badge
                : properties.rent_badge
            } badge  px-2 py-1 text-center`}
          >
            {data.property_tag}
          </span>
          <div className={`${properties.property_text} text-light`}>
            <p className={`${properties.property_name}`}>
              {data.property_name}
            </p>
            <p className={`${properties.property_location}`}>
              {data.property_location}
            </p>
            <p className={`${properties.property_price}`}>
              ${data.property_price}
            </p>
          </div>
          <img
            src={property_image}
            alt="img"
            className={`${properties.property_image}`}
          />{" "}
        </div>
      </Link>
    );
  });

  return (
    <>
      <Sidebar />
      <div className={`${properties.property_container} row`}>
        <div className={`${properties.search_container}`}>
          <div>
            <input className="form-control" placeholder="search" />
            <span>
              <img src={searchBtn} alt="search icon" />
            </span>
          </div>
        </div>
        <div
          className={`${properties.add_property} mt-2 col-md-12 justify-content-between d-flex flex-wrap`}
        >
          <p className={`${properties.property_heading}`}> My Property</p>
          <Link to="/addproperty">
            {" "}
            <button className={`${properties.add_btn} btn`}>Add New</button>
          </Link>
        </div>

        <div
          className={`${properties.properties_image} col-md-12 d-flex flex-wrap justify-content-between`}
        >
          {datas}
        </div>
      </div>
    </>
  );
};

export default Properties;
