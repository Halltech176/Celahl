import React  from 'react'
import Sidebar from '../../Common/Sidebar/Sidebar'
import {Link} from 'react-router-dom'
import properties from './Properties.module.css'
import property_image from '../../../Assets/house.png'
import searchIcon from '../../../Assets/SearchVector.png'


const Properties = () => {
  return (
    <>
      <Sidebar/>
  <div className ={`${properties.property_container}` }>

    {/* search container */}

    <div className={`${properties.search_container}`}>
    <div className={`${properties.property_search}  input-group  `}>
        <input type="search" name="" className='form-control' id="" />
        <div className="input-group-append d-inline"><img src={searchIcon} alt ='search' /></div>
    </div>
    </div>

    {/* Add property */}

    <div className={`${properties.add_property} my-3`}>
    {/* <h2  className={`${properties.property_text} text-danger`}> My Properties</h2> */}
   <Link to ='/addproperty' className={`${properties.add_btn}`}> <button className='btn btn-primary px-5'>Add New</button></Link>
   </div>
  
  {/* Property images */}
    <div className={`${properties.property_image}`}>

    <div className={`${properties.image_container}`} >
    <span  className={`${properties.sell_badge} badge px-4 py-1`}>For Sell</span>
    <div className={`${properties.property_text}`}>
        <p className='h4'>Adeyemi Villa</p>
        <p className='h6'>N0. 69 Olamid City, Ogbomoso, <br/> Oyo state </p>
        <p className='text-danger'>$44, 000</p>        
    </div>
    <img src = {property_image} alt='img' className={`${properties.property_image}`}  />
    </div>

    <div className={`${properties.image_container}`} >
    <span  className={`${properties.rent_badge} badge px-4 py-1`}>For Sell</span>
    <div className={`${properties.property_text}`}>
        <p className='h4'>Adeyemi Villa</p>
        <p className='h6'>N0. 69 Olamid City, Ogbomoso, <br/> Oyo state </p>
        <p className='text-danger'>$44, 000</p>        
    </div>
    <img src = {property_image} alt='img' className={`${properties.property_image}`}  />
    </div>

    <div className={`${properties.image_container}`} >
    <img src = {property_image} alt='img' className={`${properties.property_image}`}  />
    </div>

    </div>


  </div>
  </>
  )
}

export default Properties