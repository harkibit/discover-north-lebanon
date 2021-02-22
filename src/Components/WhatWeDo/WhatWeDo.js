import React from 'react';
import './WhatWeDo.css';
import icon1 from './icons/icon1.png';
import icon2 from './icons/icon2.png';
import icon3 from './icons/icon3.png';

export default function WhatWeDo(props) {
  const title1 = '+ activities',
    desc1 = 'Enjoy a variety of activities throughout the north!';
  const title2 = 'Explore Cities',
    desc2 = 'Every City has its own stuff, get to know them more with us';
  const title3 = 'Have tour guide',
    desc3 = 'First time in North? don’t worry you can have a tour guide';

  return (
    <div className="container">
      <div className="part">
        <img src={icon1} className="iconStyle" alt="icon" />
        <div className="text">
          <h2>
            {props.activityNumber}
            {title1}
          </h2>
          <p>{desc1}</p>
        </div>
      </div>

      <div className="part">
        <img src={icon2} className="iconStyle" alt="icon" />
        <div className="text">
          <h2>{title2}</h2>
          <p>{desc2}</p>
        </div>
      </div>

      <div className="part">
        <img src={icon3} className="iconStyle" alt="icon" />
        <div className="text">
          <h2>{title3}</h2>
          <p>{desc3}</p>
        </div>
      </div>
    </div>
  );
}
