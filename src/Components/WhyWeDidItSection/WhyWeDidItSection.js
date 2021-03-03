import React from 'react';
import './WhyWeDidItSection.css';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function WhyWeDidItSection({ imgSrc, title, text }) {
  return (
    <div className="style-align">
      <img src={imgSrc} alt="icon" className="icon-size" />
      <Title level={3} className="margin-top-parag">
        {title}
      </Title>
      <Paragraph> {text} </Paragraph>
    </div>
  );
}

export default WhyWeDidItSection;
