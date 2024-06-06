import React from 'react';
import BlogItems  from './BlogItems'
import './Blogs.css';
import Blogsidebar from './Blogsidebar';
import Blogbanner from './Blogbanner';


export const Blogs = () => {
  return (
  <>
  <Blogbanner />
  {/* Features Start */}
  <section className="blog-items section">
    <div className="bs-container">
      <div className="bs-row">
        <div className="bs-col-lg-8 bs-col-12">
          <div className="bs-row">
            <div className="bs-col-12">
              <div className="main-blog">
                <BlogItems />
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
