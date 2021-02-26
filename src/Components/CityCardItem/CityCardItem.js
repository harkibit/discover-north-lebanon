import React from 'react';
import './CityCardItem.css';
import { Card } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

export default function CityCardItem(city) {
  const { imgsrc, name, info, activityNumber } = city;
  return (
    <div className="card">
      <div class="container">
        <Card
          style={{ width: 350, height: 345, borderRadius: 10 }}
          cover={<img className="img-size" alt="example" src={imgsrc} />}
        >
          <div className="meta-card-content">
            <div className="meta-card-title">
              <Title level={4}> {name} </Title>
              <span className="act-numb">{activityNumber}activities</span>
            </div>

            <span>{info && info.split(' ').slice(0, 6).join(' ')} ..</span>
          </div>
          <div className="overlay">
            <div className="text">
              <span className="learn-more">
                Learn more &nbsp;
                <DoubleRightOutlined
                  style={{ fontSize: '12px', marginBottom: -5 }}
                />
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
