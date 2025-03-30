import React from 'react'
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import WhatsAppRedirect from './WhatsAppRedirect';


const Gallery = ({ images }) => {

    const gallery = [
        {
            src: './c1.jpg',
            text: 'रुद्राभिषेक'
        },
        {
            src: './c3.jpg',
            text: 'महालक्ष्मी पूजन'
        },
        {
            src: './c7.jpg',
            text: 'श्री गणेश चतुर्थी'
        },
        {
            src: './c4.jpg',
            text: ' यज्ञ'
        },
        {
            src: './c9.jpg',
            text: 'नवग्रह पूजन'
        },
        {
            src: './c12.jpg',
            text: 'महामृत्युंजय'
        },
        {
            src: './c13.jpg',
            text: 'नवग्रह पूजन'
        },
        {
            src: './c14.jpg',
            text: 'शिव अर्चना'
        },

        {
            src: './c15.jpg',
            text: 'शिव अर्चना'
        },
        {
            src: './c17.jpg',
            text: 'अन्नप्राशन'
        },
        {
            src: './c16.jpg',
            text: 'श्री सत्यनारायण भगवान व्रत'
        },
        {
            src: './c18.jpg',
            text: 'श्री सत्यनारायण कथा'
        },
        {
            src: './c19.jpg',
            text: 'रामार्चा पूजा'
        }
    ]

    return (
        <>
            <div className="container-fluid">
            <WhatsAppRedirect>
          <FontAwesomeIcon icon={faWhatsapp} className='text-success' style={{ width: '10vw', height: '10vh', position: 'fixed', bottom: '30px', right: '20px' }} />
        </WhatsAppRedirect>
                <div className="row ">
                    <div className="col-sm-12 p-5 gallery-bg border border-warning shadow-sm">
                        <h2 className='mb-5 fw-bold text-center text-warning'>Gallery Page</h2>
                        <div className='d-flex flex-wrap gap-5 justify-content-center galarySection'>
                            {
                                gallery.map((item, index) => {
                                    return (
                                        <div className='d-flex flex-column gallery-item' key={index}>
                                            <img src={item.src} className='rounded-4' style={{ height: '30vh', width: '20vw', objectFit: 'cover' }} />
                                            <span className='text-center fw-bold fs-4'>{item.text}</span>
                                        </div>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery
