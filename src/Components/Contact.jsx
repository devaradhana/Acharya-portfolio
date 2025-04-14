import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import WhatsAppRedirect from './WhatsAppRedirect';




const Contact = () => {
  return (
    <>
      <div className="container-fluid">
      <WhatsAppRedirect>
          <FontAwesomeIcon icon={faWhatsapp} className='text-success' style={{ width: '10vw', height: '10vh', position: 'fixed', bottom: '30px', right: '20px' }} />
        </WhatsAppRedirect>
        <div className="row ">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 ">
            <h1 className='text-center my-4'><span className='text-warning' >CONTACT</span>US</h1>
            <div className="row my-4 ">
              <div className="col-sm-6 bg-light border border-warning rounded-5 shadow-lg">
                <p className='cont mt-3'><FontAwesomeIcon icon={faPhone}  className='text-warning' /> :   +91  8884009140</p>
                <br />
                <p className=''> <FontAwesomeIcon icon={faEnvelope} className='text-warning' /> :  panditarunmishra6@gmail.com</p>
                <br />
                <p className=''><FontAwesomeIcon icon={faLocationDot} className='text-warning' /> :  No. 10, 7th main road, Havanoor extension, Nagasandra post, Bangalore 560073</p>
                <button className='btn btn-outline-warning mb-3 rounded-pill'> <a className="navbar-brand  d-block d-md-inline-block" href='tel:+918884009140'>
                  <FontAwesomeIcon icon={faPhone} spin />Call Now
                </a></button>
                <button className='btn btn-outline-warning mb-3 rounded-pill ms-5'> <WhatsAppRedirect>
                  Whatshap Now
                  </WhatsAppRedirect></button>
              </div>

              <div className="col-sm-6 bg-light border border-warning rounded-5 shadow-lg">
                <form>
                <input type='text' className='form-control my-3' placeholder='YOUR NAME' />
                <input type='number' className='form-control my-3' placeholder='MOBILE NO.' />
                <input type='mail' className='form-control my-3' placeholder='YOUR EMAIL' />
                <input type='text' className='form-control my-3' placeholder='COMMENT' />
                <button className='form-control rounded-pill btn btn-outline-warning mb-3'>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>


          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  )
}

export default Contact