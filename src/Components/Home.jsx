import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Gallery from './Gallarey';
import Contact from './Contact'
import './About.css'
import { useNavigate } from 'react-router-dom';
import WhatsAppRedirect from './WhatsAppRedirect';


const Home = () => {
  const navigate = useNavigate();
  const navigateContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className="container-fluid">
        <WhatsAppRedirect>
          <FontAwesomeIcon icon={faWhatsapp} className='text-success' style={{ width: '10vw', height: '10vh', position: 'fixed', bottom: '30px', right: '20px' }} />
        </WhatsAppRedirect>

        <div className="row overflow-hidden w-100">
          <div className='text-center fs-4 ms-4 text-warning'>
            <Typewriter
              options={{
                strings: ['ॐ गं गणपतये नम:'],
                autoStart: true,
                loop: true,
              }} />
          </div>

          <div className="col-sm-12 ms-3 shadow-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <img src="/pngwing.com.png" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c9.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c13.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c16.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c17.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c19.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c3.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/c12.jpg" alt="Loading......" className='w-100' style={{ height: '50vh' }} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-sm-12 ms-3 mt-3">
            <div className="row">
              <div className="col-sm-12 text-center"><h1 className='text-warning'>
                <Typewriter
                  options={{
                    strings: ['WELCOME TO ACHARYA  ARUN MISHRA JI'],
                    autoStart: true,
                    loop: true,
                  }} />
              </h1>
              </div>

              <div className="col-sm-4"><img src='./c20.jpg' className='w-100  imggg imgggg shadow-sm' alt="Loading......" /></div>
              <div className="col-sm-8 mb-4 px-3">
                <h4 className=''>Name:  Arun Mishra </h4>
                <h4 className=''>Mobile: +91 8884009140</h4>
                <p className='mt-3'>With profound expertise in Vedic scriptures, rituals, and spiritual practices, I am a dedicated Acharya/Pandit committed to preserving and spreading the timeless wisdom of Sanatan Dharma. With [X years] of experience in performing sacred ceremonies, guiding spiritual journeys, and teaching ancient texts, I have earned a reputation in Bengaluru as a renowned Hindi and Vedic Pandit. My mission is to inspire faith, foster harmony, and uphold the spiritual and cultural heritage of our traditions.</p>
                <p className='mt-4'>वैदिक शास्त्रों, अनुष्ठानों और आध्यात्मिक अभ्यासों में गहन विशेषज्ञता के साथ, मैं एक समर्पित आचार्य/पंडित हूँ, जो सनातन धर्म के शाश्वत ज्ञान को संरक्षित और प्रचारित करने के लिए प्रतिबद्ध हूँ। [X वर्षों] के अनुभव के साथ, पवित्र संस्कारों का संचालन, आध्यात्मिक यात्राओं का मार्गदर्शन और प्राचीन ग्रंथों की शिक्षा देने में, मैंने बेंगलुरु में एक प्रसिद्ध हिंदी और वैदिक पंडित के रूप में अपनी पहचान बनाई है। मेरा उद्देश्य विश्वास जगाना, सामंजस्य को बढ़ावा देना और हमारी परंपराओं की आध्यात्मिक और सांस्कृतिक धरोहर को बनाए रखना है।
                </p>
                <button className=' rounded-pill  btn btn-outline-warning mb-4' onClick={navigateContact}>CONTACT NOW</button>
                <button className=' rounded-pill btn btn-outline-warning ms-5 mb-4'>READ MORE</button>
              </div>
            </div>
          </div>

        </div>

        <Gallery />
        <Contact />
      </div>
      {/* <Footer/> */}




    </>
  )
}

export default Home