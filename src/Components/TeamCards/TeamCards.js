import React from 'react';
import './teamCard.css';
import { Card } from 'antd';
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const TeamCard = ({ imgsrc, name, specialization, url }) => {
  return (
    <Card
      hoverable
      className="cardSize"
      cover={<img src={imgsrc} alt="team member" />}
      actions={[
        <a href={url.github} target="_blank" rel="noreferrer">
          <GithubOutlined key="github" />
        </a>,
        <a href={url.linkedin} target="_blank" rel="noreferrer">
          <LinkedinOutlined key="linkedin" />
        </a>,
        <a href={url.twitter} target="_blank" rel="noreferrer">
          <TwitterOutlined key="twitter" />
        </a>,
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
