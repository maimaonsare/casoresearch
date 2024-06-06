import React from 'react';

export default function Blogsidebar() {
  return (
    <div className="bs-col-lg-4 bs-col-12">
          <div className="main-sidebar">
            {/* Single Widget */}
            <div className="single-widget search">
              <div className="form">
                <input type="email" placeholder="Search Here..." />
                <a className="button" href="#">
                  <i className="fa fa-search" />
                </a>
              </div>
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget category">
              <h3 className="title">Blog Categories</h3>
              <ul className="categor-list">
                <li>
                  <a href="#"><i class="fa fa-thin fa-angles-right"></i>Academic Writing</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-thin fa-angles-right"></i>Technology</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-thin fa-angles-right"></i>Sports</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-thin fa-angles-right"></i>Artificial Intelligence</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-thin fa-angles-right"></i>Jobs</a>
                </li>
              </ul>
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget recent-post">
              <h3 className="title">Recent posts</h3>
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="../images/img-1.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">We have annnocunced our new product.</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Jan 11, 2020
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      35
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="../images/img-2.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">The use of AI tools in academic writing</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      Mar 05, 2019
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      59
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
              {/* Single Post */}
              <div className="single-post">
                <div className="image">
                  <img src="../images/img-3.jpg" alt="#" />
                </div>
                <div className="content">
                  <h5>
                    <a href="#">We provide efficient business soliutions.</a>
                  </h5>
                  <ul className="comment">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      June 09, 2019
                    </li>
                    <li>
                      <i className="fa fa-commenting-o" aria-hidden="true" />
                      44
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Post */}
            </div>
            {/*/ End Single Widget */}
            {/* Single Widget */}
            {/*/ End Single Widget */}
            {/* Single Widget */}
            <div className="single-widget side-tags">
              <h3 className="title">Tags</h3>
              <ul className="tag">
                <li>
                  <a href="#">business</a>
                </li>
                <li>
                  <a href="#">wordpress</a>
                </li>
                <li>
                  <a href="#">html</a>
                </li>
                <li>
                  <a href="#">multipurpose</a>
                </li>
                <li>
                  <a href="#">education</a>
                </li>
                <li>
                  <a href="#">template</a>
                </li>
                <li>
                  <a href="#">Ecommerce</a>
                </li>
              </ul>
            </div>
            {/*/ End Single Widget */}
          </div>
        </div>
  )
}
