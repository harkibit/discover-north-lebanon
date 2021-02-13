import React, { useState } from 'react';
import { Card, Image, Row, Col, Typography, Rate, Tooltip } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  DoubleRightOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export default function ActivitiesItem({
  imgsrc,
  activityName,
  rating,
  cityName,
  price,
  tags,
}) {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <Card style={{ height: 200, width: 600 }}>
      <Row>
        <Col span={10}>
          <Image src={imgsrc} width={200} height={150} />
        </Col>

        <Col span={14}>
          <Row>
            <Col span={21}>
              <Title level={3}>{activityName}</Title>
            </Col>
            <Col span={3}>
              <Tooltip
                placement="top"
                title={like ? 'add to favorite' : 'remove from favorite'}
              >
                {like ? (
                  <HeartOutlined
                    style={{ fontSize: '30px', color: '#c4d0b8' }}
                    onClick={toggleLike}
                  />
                ) : (
                  <HeartFilled
                    style={{ fontSize: '30px', color: 'red' }}
                    onClick={toggleLike}
                  />
                )}
              </Tooltip>
            </Col>
          </Row>

          <Row style={{ height: 70 }}>
            <Col span={19}>
              {cityName}
              <br />
              <Rate disabled defaultValue={rating} />
            </Col>
            <Col span={5}>
              <Title level={3}>{price}</Title>
            </Col>
          </Row>

          <hr />

          <Row justify="space-around">
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
            <span>
              learn more <DoubleRightOutlined />
            </span>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
