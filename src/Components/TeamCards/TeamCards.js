import React from 'react';
import './teamCard.css';
import { Card } from 'antd';
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const TeamCard = ({ imgsrc, name, specialization }) => {
  return (
    <Card
      hoverable
      className="cardSize"
      cover={<img src={imgsrc} />}
      actions={[
        <GithubOutlined key="github" />,
        <LinkedinOutlined key="linkedin" />,
        <TwitterOutlined key="twitter" />,
      ]}
    >
      <div className="centeredItem">
        <h2>{name}</h2>
        <span className="spec">{specialization}</span>
      </div>
    </Card>
  );
};
export default TeamCard;
