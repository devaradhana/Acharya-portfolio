import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import WhatsAppRedirect from './WhatsAppRedirect';

const NavBanner = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center bg-warning shadow-sm">
                <div className="col-6 mb-2 mb-md-0 text-danger ">
                    <a className="navbar-brand fs-5 d-block d-md-inline-block" href='tel:+918884009140'>
                        <FontAwesomeIcon icon={faPhone} spin /> +91 8884009140
                    </a>
                </div>
                <div className="col-6 d-flex justify-content-end">
                <span className="me-3 fs-4 text-info">
                        <WhatsAppRedirect>
                            <FontAwesomeIcon icon={faWhatsapp} className='text-success' />
                            </WhatsAppRedirect>
                    </span>
                    <span className="me-3 fs-4 text-danger">
                        <Link className="navbar-brand" to="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </span>
                    <span className="me-3 fs-4 text-primary">
                        <Link className="navbar-brand" to="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                    </span>
                   
                    <span className="me-3 fs-4 text-danger">
                        <Link className="navbar-brand" to="https://www.youtube.com/your_youtube_username" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </span>
                    
                </div>
            </div>
        </div>
    );
}

export default NavBanner;
