import React from 'react';
import './ErrorPage.css';
import error from '../../assets/errorPic.png';
import Button from '../../Components/Button/Button';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function ErrorPage() {
  return (
    <div className="flex-align">
      <img src={error} alt="error" className="img-properties" />
      <div className="texts-align">
        <Title level={3}>Something's missing.</Title>
        <Title level={4}>The page you looking for is not found.</Title>
      </div>
      <Link to="/">
        {' '}
        <Button text="Go to Homepage" type="primary" />{' '}
      </Link>
    </div>
  );
}
