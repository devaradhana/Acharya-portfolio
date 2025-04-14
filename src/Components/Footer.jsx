import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSquareEnvelope, faGlobe, faHouse, faUser, faImage, faGopuram, faAddressBook,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-info mx-auto px-5 bg-dark border border-danger">
          <div className="col-sm-4  text-light">
            <h4 className='ms-4 mt-5 cnt'>CONTACT INFO</h4>

            <ul className=''>
              <li><FontAwesomeIcon icon={faPhone} />  +91  8884009140</li>
              <li><FontAwesomeIcon icon={faSquareEnvelope} />   panditarunmishra6@gmail.com</li>
              <li><FontAwesomeIcon icon={faLocationDot} />  No. 10, 7th main road, Havanoor extension,<br /> Nagasandra post, Bangalore 560073</li>
              <li><FontAwesomeIcon icon={faGlobe} />  devaradhana.in</li>
            </ul>

          </div>

          <div className="col-sm-4 text-light">
            <h4 className='ms-4 mt-5 cnt'>LINKS</h4>

            <ul className=''>
              <li><Link to='/' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faHouse} />  HOME</Link></li>
              <li><Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faUser} />   ABOUT</Link></li>
              <li><Link to='/gallery' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faImage} /> GALLERY</Link></li>
              <li><Link to='/servces' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faGopuram} />  SERVICES</Link></li>
              <li><Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}><FontAwesomeIcon icon={faAddressBook} />  CONTACT</Link></li>
            </ul>
          </div>

          <div className="col-sm-4 ps-1 mt-4 mb-3 w-100 overflow-hidden ifrm-div "><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.9222750493144!2d77.50520276314353!3d13.051171787271457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1742666060006!5m2!1sen!2sin" width={400} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <p className='text-light text-center'><FontAwesomeIcon icon={faCopyright} />  Created By Abhishek Pandey.</p>
                </div>
      </div>
    </>
  )
}

export default Footer