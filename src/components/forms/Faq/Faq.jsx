import React from "react";
import { Link } from "react-router-dom";
import FaqImg from "../../../Assets/FaqImg.png";
import "./Faq.css";
import { Questions } from "./FaqQuestions";
const Faq = () => {
  const renderQuestion = Questions.map((question, index) => (
    <div className="accordion-item col-md-9" key={index}>
      <h2 className="accordion-header p-3" id={index}>
        <button
          type="button"
          className="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target={question.target}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {/* <FaPlusCircle class="accordion-button collapsed" data-bs-target={question.target} aria-expanded="true" aria-controls="collapseOne">

     </FaPlusCircle> */}
          {question.topic}
          {/* <span><FaPlusCircle color='blue'/></span> */}
        </button>
      </h2>
      <div
        id={question.id}
        className="accordion-collapse collapse"
        aria-labelledby={index}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{question.content}</div>
      </div>
    </div>
  ));
  return (
    <div className="container-fluid">
      <div className="faq-box col-12 p-5 my-3 text-center">
        <h3>FAQ</h3>
        <h2>We're here to help</h2>
        <h5>Have Questions? we're here to help</h5>
      </div>
      <div className="">
        <div className="accordion accordion-flush row mx-auto w-100 w-md-75 justify-content-center">
          <div className="heading text-center m-5">
            <h4>Frequently asked questions</h4>
            <h6>Everything you need to know about the product and billing.</h6>
          </div>
          {renderQuestion}
          {/* <div className="images col-md-7">
        <img src="../../assets/avatar.png" alt="avatar1" className='img-1' />
        <img src="../../assets/avatar-1.png" alt="avatar-1" className='img-2' />
        <img src="../../assets/avatar-2.png" alt="avatar-2" className='img-3' />
    </div> */}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
  <div className="contact-link text-center bg-white p-3 col-md-8 me-auto d-flex flex-column justify-content-center align-items-center">
          <div>
            <img src={FaqImg} alt="" />
          </div>
          <div>
            <h6>Still have questions?</h6>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg p-2">
              Get in Touch
            </Link>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Faq;
