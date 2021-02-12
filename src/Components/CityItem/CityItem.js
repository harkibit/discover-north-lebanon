import React from 'react';
import { Card, Image, Row, Col, Typography } from 'antd';
import { FireOutlined, DoubleRightOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default function CityItem({
  imgsrc,
  cityName,
  cityInfo,
  activityNumber,
}) {
  return (
    <div>
      <Card style={{ height: 200, width: 600 }}>
        <Row>
          <Col span={10}>
            <Image src={imgsrc} width={200} height={150} />
          </Col>

          <Col span={14}>
            <Row>
              <Title level={3}>{cityName}</Title>
            </Row>

            <Row style={{ height: 70 }}>{cityInfo}</Row>

            <hr />

            <Row justify="space-between">
              <span>
                <FireOutlined /> {activityNumber} Activity
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
