import React from 'react';
import './Blogbanner.css';

export default function Blogbanner() {
  return (
    <div className="bs-container-fluid features">
    <div className="bs-container">
      <div className="bs-row categories">
        <div className='top-items'>
          <div className='left-side'>
              <div className='round-circle positioned'>
                <div className='round-circle inner-circle'>
                <img src="../images/dell.jpg" class="circle-img round-circle" alt=""/>
                </div>
                <span class="small-cricle border-2  btn-sm-square">3</span>
              </div>
          </div>
          <div className='right-side'>
            <div className='features-content'>
            <p class="uppercase-text">Sports</p>
                <a href="#">
                  Get the best sports analytics.
                </a>
              <small class="text-timeline"><i class="fas fa-calendar-alt"></i> Dec 9, 2023</small>
            </div>
          </div>
        </div>
        <div className='top-items'>
          <div className='left-side'>
              <div className='round-circle positioned'>
                <div className='round-circle inner-circle'>
                <img src="../images/img-3.jpg" class="circle-img round-circle" alt=""/>
                </div>
                <span class="small-cricle border-2  btn-sm-square">2</span>
              </div>
          </div>
          <div className='right-side'>
            <div className='features-content'>
            <p class="uppercase-text">Technology</p>
                <a href="#">
                  Get the reviews on techology.
                </a>
              <small class="text-timeline"><i class="fas fa-calendar-alt"></i> Jan 9, 2024</small>
            </div>
          </div>
        </div>
        <div className='top-items'>
          <div className='left-side'>
              <div className='round-circle positioned'>
                <div className='round-circle inner-circle'>
                <img src="../images/img-2.jpg" class="circle-img round-circle" alt=""/>
                </div>
                <span class="small-cricle border-2  btn-sm-square">11</span>
              </div>
          </div>
          <div className='right-side'>
            <div className='features-content'>
            <p class="uppercase-text">Academic Research</p>
                <a href="#">
                  Get reviews on academic writing.
                </a>
              <small class="text-timeline"><i class="fas fa-calendar-alt"></i> Dec 19, 2022</small>
            </div>
          </div>
        </div>
        <div className='top-items'>
          <div className='left-side'>
              <div className='round-circle positioned'>
                <div className='round-circle inner-circle'>
                <img src="../images/img-1.jpg" class="circle-img round-circle" alt=""/>
                </div>
                <span class="small-cricle border-2  btn-sm-square">3</span>
              </div>
          </div>
          <div className='right-side'>
            <div className='features-content'>
            <p class="uppercase-text">AI</p>
                <a href="#">
                   Latest on Artificial Intelligence.
                </a>
              <small class="text-timeline"><i class="fas fa-calendar-alt"></i> Feb 9, 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
