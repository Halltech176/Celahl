import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import "./Footer-styles.scss";
import PlayBadge from '../../../Assets/Mobile_play_store_badge.png'
import AppBadge from '../../../Assets/Mobile app store badge.png'
import { ReactComponent as AppStore } from "../../../Assets/AppStore.svg";
import { ReactComponent as PlayStore } from "../../../Assets/PlayStore.svg";
import Logo from "../../Logo/Logo.component";

function Footer() {
  return (
           <div className="bg-black position-absolute  mt-5 w-100 ">
      <div className="container">
        <div className="grid row">
          <div className="col-12 col-md-3">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum
              aperiam recusandae sunt libero.
            </p>
          </div>
          <div className="col-6 col-md-2">
           <ul>  <h3 className="mb-3">Services</h3>
           
              <li>Buy/See</li>
              <li>Pricing</li>
              <li>Case Studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
           
            <ul> <h3 className="mb-3">Company</h3>
              <li>About</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
           
            <ul> <h3 className="mb-3">Follow Us</h3>
              <li><FaFacebookF color="blue"/> <span> Facebook</span></li>
              <li><FaTwitter color="blue"/><span> Twitter</span></li>
              <li><FaInstagram color="blue"/> <span> Instagram</span> </li>
              <li><FaLinkedinIn color="blue"/> <span> Linkedin</span> </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            
            <ul><h3 className="">Get the app</h3>
              <li className="store"><img src={AppBadge} alt="" className="img-fluid w-100"/></li>
              <li className="store"><img src={PlayBadge} alt="" className="img-fluid w-100"/></li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center text-muted small">Copyright &copy; 2022 CEDO | All Rghts reserved</p>
      </div>
    </div>
  
   
  );
}

export default Footer;
