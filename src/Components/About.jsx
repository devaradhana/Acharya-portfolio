import React from 'react'
import Typewriter from 'typewriter-effect';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import WhatsAppRedirect from './WhatsAppRedirect';



const About = () => {
  return (
    <>
      <div className="container-fluid">
      <WhatsAppRedirect>
          <FontAwesomeIcon icon={faWhatsapp} className='text-success' style={{ width: '10vw', height: '10vh', position: 'fixed', bottom: '30px', right: '20px' }} />
        </WhatsAppRedirect>
        <div className="row">
          <div className="col-sm-12 mt-5 text-center">
            <h1 className='text-warning'>
              <Typewriter
                options={{
                  strings: ['WELCOME TO ACHARYA  ARUN MISHRA JI'],
                  autoStart: true,
                  loop: true,
                }} />
            </h1>
          </div>


          <div className="row">
            <div className="col-sm-3 mx-auto"> </div>
            <div className="col-sm-4  mx-auto my-5">  <img src='./c4.jpg' className=' shadow-lg imgg   ' alt="Loading......" /></div>
            <div className="col-sm-3 mx-auto"> </div>
          </div>


          <div className="col-sm-12 border text-center">
            <h4 className=' mt-5'>Name:  Arun Mishra </h4>
            <h4 className='mb-5'>Mobile: +91 8884009140</h4>
            <p className='mt-3'>With profound expertise in Vedic scriptures, rituals, and spiritual practices, I am a dedicated Acharya/Pandit committed to preserving and spreading the timeless wisdom of Sanatan Dharma. With [X years] of experience in performing sacred ceremonies, guiding spiritual journeys, and teaching ancient texts, I have earned a reputation in Bengaluru as a renowned Hindi and Vedic Pandit. My mission is to inspire faith, foster harmony, and uphold the spiritual and cultural heritage of our traditions.</p>
            <p className='mt-4'>वैदिक शास्त्रों, अनुष्ठानों और आध्यात्मिक अभ्यासों में गहन विशेषज्ञता के साथ, मैं एक समर्पित आचार्य/पंडित हूँ, जो सनातन धर्म के शाश्वत ज्ञान को संरक्षित और प्रचारित करने के लिए प्रतिबद्ध हूँ। [X वर्षों] के अनुभव के साथ, पवित्र संस्कारों का संचालन, आध्यात्मिक यात्राओं का मार्गदर्शन और प्राचीन ग्रंथों की शिक्षा देने में, मैंने बेंगलुरु में एक प्रसिद्ध हिंदी और वैदिक पंडित के रूप में अपनी पहचान बनाई है। मेरा उद्देश्य विश्वास जगाना, सामंजस्य को बढ़ावा देना और हमारी परंपराओं की आध्यात्मिक और सांस्कृतिक धरोहर को बनाए रखना है।
            </p>
            <button className=' rounded-pill  btn btn-outline-warning mb-4'>CONTACT NOW</button>
            <button className=' rounded-pill btn btn-outline-warning ms-5 mb-4'>READ MORE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About