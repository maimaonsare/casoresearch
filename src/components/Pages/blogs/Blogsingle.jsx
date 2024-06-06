import React from 'react';
import './Blogs.css';
import Blogsidebar from './Blogsidebar';
import Blogbanner from './Blogbanner';


export const Blogsingle = () => {
  return (
  <>
  {/* Features Start */}
  <Blogbanner />
  <section className="blog-items section">
    <div className="bs-container">
      <div className="bs-row">
        <div className="bs-col-lg-8 bs-col-12">
          <div className="bs-row">
            <div className="bs-col-12">
              <div className="main-blog">
                {/* News Head */}
                <div className="blog-head">
                  <img src="../images/img-5.jpg" alt="#" />
                </div>
                {/* News Title */}
                <h1 className="blog-title">
                  <a href="#">
                     Postgraduate Academic Research and Writing
                  </a>
                </h1>
                {/* Meta */}
                <div className="meta">
                  <div className="meta-left">
                    <span className="author">
                      <a href="#">
                        <img src="../images/author.jpg" alt="#" />
                        Naimur Rahman
                      </a>
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o" />
                      03 Feb 2019
                    </span>
                  </div>
                  <div className="meta-right">
                    <span className="comments">
                      <a href="#">
                        <i className="fa fa-comments" />
                        05 Comments
                      </a>
                    </span>
                    <span className="views">
                      <i className="fa fa-eye" />
                      33K Views
                    </span>
                  </div>
                </div>
                {/* News Text */}
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse facilisis ultricies tortor, nec sollicitudin
                    lorem sagittis vitae. Curabitur rhoncus commodo rutrum.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam nec lacus
                    pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla
                    orci, pharetra at dictum consequat, pretium pretium nulla.
                    Suspendisse porttitor nunc a sodales tempor. Mauris sed
                    felis maximus, interdum metus vel, tincidunt diam.
                  </p>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam nec lacus
                    pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla
                    orci, pharetra at dictum consequat, pretium pretium nulla.
                    Suspendisse porttitor nunc a sodales tempor. Mauris sed
                    felis maximus, interdum metus vel, tincidunt diam. Nam ac
                    risus vitae sem vehicula egestas. Sed velit nulla, viverra
                    non commod
                  </p>
                  <div className="image-gallery">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-image">
                          <img src="img/blog2.jpg" alt="#" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-image">
                          <img src="img/blog3.jpg" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse facilisis ultricies tortor, nec sollicitudin
                    lorem sagittis vitae. Curabitur rhoncus commodo rutrum.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam nec lacus
                    pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla
                    orci, pharetra at dictum consequat, pretium pretium nulla.
                    Suspendisse porttitor nunc a sodales tempor. Mauris sed
                    felis maximus, interdum metus vel, tincidunt diam.
                  </p>
                  <blockquote className="overlay">
                    <p>
                      Aliquam nec lacus pulvinar, laoreet dolor quis,
                      pellentesque ante. Cras nulla orci, pharetra at dictum
                      consequat, pretium pretium nulla. Suspendisse porttitor
                      nunc a sodales tempor. Mauris sed felis maximus, interdum
                      metus vel, tincidunt diam. Nam ac risus vitae sem vehicula
                      egestas. Sed velit nulla, viverra non commodo et, sodales
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse facilisis ultricies tortor, nec sollicitudin
                    lorem sagittis vitae. Curabitur rhoncus commodo rutrum.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam nec lacus
                    pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla
                    orci, pharetra at dictum consequat, pretium pretium nulla.
                    Suspendisse porttitor nunc a sodales tempor. Mauris sed
                    felis maximus, interdum metus vel, tincidunt diam. Nam ac
                    risus vitae sem vehicula egestas. Sed velit nulla, viverra
                    non commodo et, sodales id dui.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse facilisis ultricies tortor, nec sollicitudin
                    lorem sagittis vitae. Curabitur rhoncus commodo rutrum.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam nec lacus
                    pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla
                    orci, pharetra at dictum consequat, pretium pretium nulla.
                    Suspendisse
                  </p>
                </div>
                <div className="blog-bottom">
                  {/* Social Share */}
                  <ul className="social-share">
                    <li className="facebook">
                      <a href="#">
                        <i className="fa fa-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fa fa-twitter" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                  {/* Next Prev */}
                  <ul className="prev-next">
                    <li className="prev">
                      <a href="#">
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                  {/*/ End Next Prev */}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="comments-form">
                <h2>Leave Comments</h2>
                {/* Contact Form */}
                <form className="form" method="post" action="mail/mail.php">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-user" />
                        <input
                          type="text"
                          name="first-name"
                          placeholder="First name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input
                          type="text"
                          name="last-name"
                          placeholder="Last name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="form-group">
                        <i className="fa fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group message">
                        <i className="fa fa-pencil" />
                        <textarea
                          name="message"
                          rows={7}
                          placeholder="Type Your Message Here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group button">
                        <button type="submit" className="btn primary">
                          <i className="fa fa-send" />
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/*/ End Contact Form */}
              </div>
            </div>
          </div>
        </div>
        <Blogsidebar />
      </div>
    </div>
  </section>
  {/*/ End Single News */}
</>

  )
};
