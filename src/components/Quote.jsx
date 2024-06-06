import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Papers} from './Papers';
import './Quote.css';

function Quote() {
const [selectedValue, setSelectedvalue] = useState('');
const [date, setDate] = useState(new Date());
const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

 const date_diff_indays = function (date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    let days = Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
    return days;
  };

  const [userInput, setUserInput] = useState("");
  const onChange = (event) => {
    setUserInput(event.currentTarget.days);
};
const onClick = () => {
  console.log(`The current userInput is "${userInput}"`);
};
  
  

  return (
    <>
    <div className="modal-d">
    <div className="modal_container1">
      <div className="modal_featured1">
        <img
          src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
          className="modal_product1"
        />
      </div>
      <div className="modal_content1">
        <h2>Quote Estimate</h2>
        <form>
          <ul className="form-list1">
            <li className="form-list_row1">
              <label>Paper Type</label>
              <select value={selectedValue} onChange={(e) => setSelectedvalue(e.target.value)}
              >
                {Papers.map ((item, index) => {
                    return (
                        <option key={index} value={item.price_page}>
                            {item.papertype} 
                        </option>
                    )
                    }
                 )}
              </select>
            </li>
            <li className='form-list_row1'>
            <label>Due Date   <span>  </span>
            <a
                    href="#"
                    className="button--transparent1 modal-open1 button--info1"
                  >
                    <svg
                      className="nc-icon1 glyph1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        {" "}
                        <path
                          fill="#35a4fb"
                          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,13c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9,12.6,8.6,13,8,13z M9.5,8.4C9,8.7,9,8.8,9,9v1H7V9c0-1.3,0.8-1.9,1.4-2.3C8.9,6.4,9,6.3,9,6c0-0.6-0.4-1-1-1 C7.6,5,7.3,5.2,7.1,5.5L6.6,6.4l-1.7-1l0.5-0.9C5.9,3.6,6.9,3,8,3c1.7,0,3,1.3,3,3C11,7.4,10.1,8,9.5,8.4z"
                        />{" "}
                      </g>
                    </svg>
                    <span className="visuallyhidden">Enter a range of dates e.g 4/7/2024-4/18/2024</span>
                  </a>
            </label> 
            <DatePicker
                    minDate={date}
                    selected={startDate}
                    onChange={handleChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                /> 
            </li>
            <li className="form-list_row1 form-list_row--inline1">
              <div>
              <label>
                  Days
                </label>
                <div className="form-list_input-inline1">             
                <input type="text" disabled value={userInput} onChange={onChange} placeholder={date_diff_indays(startDate, endDate)}/> 
                </div>
              </div>
              <div>
                <label>
                  No Of pages
                </label>
                <input
                  type="number"
                  name="page"
                  min="1"
                  placeholder='e.g. 2'
                  required=""
                />
              </div>
            </li>
            <li>
              <button type="submit" className="button">
                Generate
              </button>
            </li>
          </ul>
        </form>
      </div>{" "}
      {/* END: .modal__content */}
    </div>{" "}
    {/* END: .modal__container */}
  </div>{" "}
  {/* END: .modal */}
  </>
  )
}

export default Quote;