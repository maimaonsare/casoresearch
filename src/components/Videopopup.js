import React from 'react';
import './Videopopup.css';

function Videopopup(props) {
  return (props.trigger) ? (
    <div className='video-popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() =>props.setTrigger(false)}>Close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Videopopup;