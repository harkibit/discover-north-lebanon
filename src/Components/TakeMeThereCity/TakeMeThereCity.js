import React from 'react';
import './TakeMeThereCity.css';
import { Typography, Button, Col, Row } from 'antd';

export default function TakeMeThereCity({ cityName }) {
  const { Title } = Typography;
  return (
    <div>
      <Row className="Row-1">
        <Col className="col-title-takeMe">
          <Title level={3} className="title-takeMe">
            First time in {cityName}?
            <br />
            Hire a tour guide!
          </Title>
        </Col>
        <Col className="col-btn-takeMe">
          <Button type="primary" className="btn-takeMe">
            Take me there!
          </Button>
        </Col>
      </Row>
    </div>
  );
}
