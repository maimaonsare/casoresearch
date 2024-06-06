import React, { useState } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import Videopopup from './Videopopup';
import Quote from './Quote';


function Banner() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <>
  <div class="bs-container-fluid feature">
  <div className="bs-container">
    <div className="bs-row">
      <div className="bs-col-lg-6">
        <div className="banner-bg">
          <h1 className="banner-hearder">
            CASO RESEARCH LTD
          </h1>
          <span>Your Partner in Research and Strategic Solutions</span>
          <p>
            At CASO Research, we believe in delivering value that aligns with your expectations.
            Our outcome-based competitive pricing ensures that you receive top-notch services without
            compromising on quality. We meticulously evaluate your requirements and determine the optimal
            timeframe for project delivery, providing you with the best possible pricing.
          </p>
          <div className="bs-row banner-details">
            <div className="bs-col-sm-6">
              <div className="icon-box-primary">
              <i class="fa fa-solid fa-street-view"></i>
              </div>
              <h5>Our Mission</h5>
              <span>
                Provide Expertise, Tailored solutions, Confidentiality, and Cutting-edge technology services
              </span>
            </div>
            <div className="bs-col-sm-6">
              <div className="icon-box-primary">
              <i class="fa fa-solid fa-globe"></i>
              </div>
              <h5>Our Vision</h5>
              <span>
              Outcome-based competitive pricing and top-notch services without compromising on quality
              </span>
            </div>
          </div>         
          <Link to='/Services' className="bs-btn bs-btn-primary explore-more">Explore More</Link>
        </div>
      </div>
      <div className="bs-col-lg-6">
        <div className="bs-row banner-video">
          <div className="bs-col-12">
         
            <div className="video-display">
              <button
                type="button"
                className="btn-play" onClick={() => setButtonPopup(true)}
              >
                <span />
              </button>
            </div>
            {/*Video pop up */}
            <Videopopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <video src="videos/consultancy-ad.mp4" style={{width:'100%', height:'auto'}} autoPlay loop/>
            </Videopopup>
          </div>
          <div className="bs-col-12">
              <Quote /> 
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>
    
  )
}

export default Banner;