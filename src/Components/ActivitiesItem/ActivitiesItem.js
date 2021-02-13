import React, { useState } from 'react';
import './activityItem.css';
import { Card, Image, Row, Col, Typography, Rate, Tooltip, Badge } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  DoubleRightOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export default function ActivitiesItem(activity) {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <Card className="cardSize" hoverable>
      <Row>
        <Col span={10}>
          <Image src={activity.imgsrc} width={200} height={150} />
        </Col>

        <Col span={14}>
          <Row>
            <Col span={21}>
              <Title level={3}>{activity.name}</Title>
            </Col>
            <Col span={3}>
              <Tooltip
                placement="top"
                title={like ? 'add to favorite' : 'remove from favorite'}
              >
                {like ? (
                  <HeartOutlined
                    className="heartOutlined heartSize"
                    onClick={toggleLike}
                  />
                ) : (
                  <HeartFilled
                    className="heartFilled heartSize"
                    onClick={toggleLike}
                  />
                )}
              </Tooltip>
            </Col>
          </Row>

          <Row className="middle-row-height">
            <Col span={19}>
              {activity.cityName}
              <br />
              <Rate disabled defaultValue={activity.rating} />
            </Col>
            <Col span={5}>
              <Title level={3}>{activity.price}</Title>
            </Col>
          </Row>

          <hr />

          <Row justify="space-around">
            {activity.tags.length < 5
              ? activity.tags.map((tag) => <span>{tag}</span>)
              : activity.tags.slice(0, 4).map((tag) => <span>{tag}</span>)}{' '}
            <Badge
              overflowCount={10}
              style={{ backgroundColor: '#108ee9' }}
              count={activity.tags.length - 4}
            />
            <span>
              learn more <DoubleRightOutlined />
            </span>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
