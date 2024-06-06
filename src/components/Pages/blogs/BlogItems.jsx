import React from 'react';
import './BlogItems.css';
import CardItem from './CardItem';

function BlogItems() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-1.jpg'
              text='Postgraduate Academic Research and Writing'
              label='Academic Writing'
              path='/blogs/Blogsingle'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='Sports Analytics and Research-Based Betting Advice:'
              label='Sports'
              path='/Blogsingle'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-3.jpg'
              text='Make a lasting impression with professionally crafted CVs and cover letters'
              label='Jobs'
              path='/Blogsingle'
            />
            <CardItem
              src='../images/img-4.jpg'
              text='Transform raw data into meaningful insights'
              label='Academic Writing'
              path='/Blogsingle'
            />
            <CardItem
              src='../images/img-5.jpg'
              text='Dive into the world of sports analytics with our expert guidance'
              label='Sports'
              path='/Blogsingle'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogItems;