import React from 'react';
import './teamCard.css';
import { Card } from 'antd';
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const AboutCard = (props) => {
  return (
    <Card
      hoverable
      className="cardSize"
      cover={<img src={props.imgsrc} />}
      actions={[
        <GithubOutlined key="github" />,
        <LinkedinOutlined key="linkedin" />,
        <TwitterOutlined key="twitter" />,
      ]}
    >
      <div className="centeredItem">
        <h2>{props.name}</h2>
        <span className="spec">{props.specialization}</span>
      </div>
    </Card>
  );
};
export default AboutCard;
