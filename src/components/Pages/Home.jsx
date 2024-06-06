import React, { useState } from 'react';
import Banner from '../Banner';
import './Home.css';
import Videopopup from '../Videopopup';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Banner />
      {/*Start Why choose*/}

  <section className="why-choose section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2>Academic Research & Writing Support</h2>
          <p>
            Welcome to CASO Research, where excellence meets expertise
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-12">
        {/* Start Choose Left */}
        <div className="choose-left">
          <h3>Who We Are</h3>
          <p>
          We specialize in providing bespoke services tailored to your specific needs.
           Our commitment is to deliver unparalleled consultancy services that elevate your academic,
            professional, social and economic pursuits.
           Trust CASO Research to be your guide on the path to success.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul className="list" >
                <li>
                <i class="fa-solid fa-check"></i>
                  <span>Postgraduate Academic Research and Writing</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>AI Content Editing</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Plagiarism and AI Support</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Research Tools Designing and Testing</span>
                </li>                
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list">
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Technical Proposals Writing</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Data Analysis and Results Presentation</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>CV and Cover Letter Writing</span>
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>Validity and Reliability of Research Tools Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Choose Left */}
      </div>
      <div className="col-lg-6 col-12">
        {/* Start Choose Rights */}
        <div className="choose-right">
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
            <video src="videos/Consultant-Ad.mp4" style={{width:'100%', height:'auto'}} autoPlay loop/>
            </Videopopup>
        </div>
        {/* End Choose Rights */}
      </div>
    </div>
    <div class="button-action">
								<a href="#" class="bs-btn">Contact Now</a>
								<a href="#" class="bs-btn second">Learn More<i class="fa fa-long-arrow-right"></i></a>
							</div>
  </div>
</section>
 
		
  <div className="container-fluid fact-data">
  <div className="container">
    <div className="row">
      <div className="counter">
        <i className="fa fa-check fa-2x text-white" />
        <h2 className="text-white">
          4
        </h2>
        <p className="text-white">Years Experience</p>
      </div>
      
      <div className="counter">
        <i className="fa fa-address-book fa-2x text-white" />
        <h2 className="bs-text-white">
          12
        </h2>
        <p className="text-white">Expert Writers</p>
      </div>
      <div
        className="counter">
        <i className="fa fa-users fa-2x text-white" />
        <h2 className="text-white">
          500+
        </h2>
        <p className="text-white">Satisfied Clients</p>
      </div>
      <div
        className="counter">
        <i className="fa fa-wrench fa-2x text-white" />
        <h2 className="text-white" data-toggle="counter-up">
          600+
        </h2>
        <p className="text-white">Completed Projects</p>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid why-us">
  <div className="container">
  <div class="col-lg-6">
          <div class="section-heading">
            <h6>| Best Deals</h6>
            <h2>Why choose us!</h2>
          </div>
        </div>
    <div className="row feature-row">
    
      <div className="row-items">
        <div className="feature-item">
          <div className="icon-box-primary">
          <i class="fa fa-thin fa-award"></i>
          </div>
          <h5>Expertise</h5>
          <p>
            Our team comprises seasoned professionals with a wealth of experience in diverse fields
          </p>
        </div>
      </div>
      <div className="row-items">
        <div className="feature-item">
          <div className="icon-box-primary">
          <i class="fa fa-brands fa-openid"></i>
          </div>
          <h5>Tailored Solutions</h5>
          <p>
            We understand that each client is unique. Our services are customized to meet your specific requirements.
          </p>
        </div>
      </div>
      <div className="row-items">
        <div className="feature-item">
          <div className="icon-box-primary">
          <i class="fa fa-thin fa-network-wired"></i>
          </div>
          <h5>Confidentiality</h5>
          <p>
            Your work is treated with the utmost confidentiality. Trust us to handle your projects with discretion
          </p>
        </div>
      </div>
      <div className="row-items">
        <div className="feature-item">
          <div className="icon-box-primary">
          <i class="fa fa-thin fa-gears"></i>
          </div>
          <h5>Cutting-Edge Technology</h5>
          <p>
            We leverage the latest in technology to deliver services that exceed expectations
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
};
