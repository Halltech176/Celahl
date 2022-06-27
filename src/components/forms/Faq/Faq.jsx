import React from 'react'
import {Link} from 'react-router-dom'
import './Faq.css'
import { Questions } from './FaqQuestions'
const Faq = () => {


    const renderQuestion = Questions.map((question, index) => (
  <div class="accordion-item col-md-9">
    <h2 class="accordion-header" id={index}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={question.target} aria-expanded="true" aria-controls="collapseOne">
        {question.topic}
      </button>
    </h2>
    <div id={question.id} class="accordion-collapse collapse" aria-labelledby={index} data-bs-parent="#accordionExample">
      <div class="accordion-body">
  {question.content}
      </div>
    </div>
  </div>
    ))
  return (
  <div className="container">
    <div className="">
    <div className="accordion flush row mx-auto w-75 justify-content-center">
    <div className="faq-box col-md-8 p-3 my-3 text-center">
        <h3>FAQ</h3>
            <h2>We're here to help</h2>
            <h5>Have Questions? we're here to help</h5>
        </div>
        <div className="heading text-center m-4">
    <h4>Frequently asked questions</h4>
        <h6>Everything you need to know  about the product and billing.</h6>
    </div>
    {renderQuestion}
    {/* <div className="images col-md-7">
        <img src="../../assets/avatar.png" alt="avatar1" className='img-1' />
        <img src="../../assets/avatar-1.png" alt="avatar-1" className='img-2' />
        <img src="../../assets/avatar-2.png" alt="avatar-2" className='img-3' />
    </div> */}
        <div className="contact-link col-md-7 text-center">
            <h6>Still have questions?</h6>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <Link to='/contact' className='btn btn-primary btn-lg'>
            Get in Touch
            </Link>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Faq