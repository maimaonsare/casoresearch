import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
          {/* Footer Start */}
          <div className="container-footer background-dark light-text margin-top" data-wow-delay="0.1s">
            <div className="container-main">
              <div className="rows">
                <div className="footer-about">
                  <div className="footer-content">
                    <a href="#" className="nav-brand">
                      <h1 className="h-text"><i class="fa fa-duotone fa-medal"></i>About Us</h1>
                    </a>
                    <p className="about-text">We specialize in providing bespoke
                     services tailored to your specific needs. Our commitment is to
                      deliver unparalleled consumer services that 
                    elevate your academic and professional pursuits. </p>
                    <form action>
                      <div className="subscribe">
                        <input type="text" className="form-inputs" placeholder="Your Email" />
                        <button className="subcribe-btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer-links">
                  <div className="rows">
                    <div className="get-in-touch">
                      <div className="section-title section-title-sm">
                        <h3 className="color-text-white">Get In Touch</h3>
                      </div>
                      <div className="contact-info">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p>123 Street, Nairobi, Kenya</p>
                      </div>
                      <div className="contact-info">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                        <p>info@example.com</p>
                      </div>
                      <div className="contact-info">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                        <p>+254 8000000</p>
                      </div>
                      <div className="social-links">
                        <a className="btns social-btn" href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a className="btns social-btn" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a className="btns social-btn" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a className="btns social-btn" href="#"><i className="fa-brands fa-instagram" /></a>
                      </div>
                    </div>
                    <div className="quick-links">
                      <div className="section-title section-title-sm">
                        <h3 className="color-text-white">Quick Links</h3>
                      </div>
                      <div className="link-animated">
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Home</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />About Us</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Our Services</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />FAQ</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Price Structure</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Blogs</a>
                      </div>
                    </div>
                    <div className="popular-links">
                      <div className="section-title section-title-sm">
                        <h3 className="color-text-white">Quick Support</h3>
                      </div>
                      <div className="link-animated">
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Live Chat</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Terms & Conditions</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Client Login</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Contact Us</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Knowledgebase</a>
                        <a className="color-text-white" href="#"><i className="fa fa-arrow-right" />Payment Options</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-footer copyrights">
            <div className="container-main" style={{textAlign: 'center'}}>
              <div className="rows" style={{justifyContent: 'end'}}>
                <div className="footer-rights">
                  <div className="copyright-text">
                    <p>© <a href="#">CASO Research Ltd </a> 2022 All Rights Reserved </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
        </div>
  )
}

export default Footer;