import React from 'react';
import './cityItem.css';
import { Card, Image, Row, Col, Typography } from 'antd';
import { FireOutlined, DoubleRightOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default function CityItem({ city }) {
  return (
    <div>
      <Card className="card-size">
        <Row>
          <Col span={10}>
            <Image
              src={city.imgsrc}
              alt={'city photo'}
              width={200}
              height={150}
            />
          </Col>

          <Col span={14}>
            <Row>
              <Title level={3}>{city.name}</Title>
            </Row>

            <Row className="row-height">
              {city.description.split(' ').length < 20 ? (
                city.description
              ) : (
                <span>
                  {' '}
                  {city.description.split(' ').slice(0, 20).join(' ')}{' '}
                  <a href="www.google.com" className="seeMore">
                    See more
                  </a>
                </span>
              )}
            </Row>

            <hr />

            <Row justify="space-between">
              <span>
                <FireOutlined /> {city.activityNumber} Activity
              </span>
              <span>
                learn more <DoubleRightOutlined />
              </span>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
