import React from 'react';
import './WhyWeDidItSection.css';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function WhyWeDidItSection({ imgSrc, title, text }) {
  return (
    <div className="align">
      <img src={imgSrc} className="icon-size" />
      <Title level={3} className="margin-top">
        {title}
      </Title>
      <Paragraph> {text} </Paragraph>
    </div>
  );
}

export default WhyWeDidItSection;
