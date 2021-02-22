import React from 'react';
import './tourGuideCard.css';
import Button from '../Button/Button';
import { Card, Row, Col, Tooltip, Tag, Skeleton } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

function TourGuideCard({ tourGuide }) {
  return (
    <Card
      className="cardSize"
      cover={<img className="imgProp" src={tourGuide.imgsrc} />}
    >
      <Row className="rowheight">
        <Col span={20}>
          <Row>
            <h1>{tourGuide.name}</h1>
          </Row>
          <div>
            Speciality : &nbsp;
            {tourGuide.tags &&
              tourGuide.tags.map((tag) => <Tag color="magenta">{tag}</Tag>)}
          </div>

          <Row justify="center" className="description">
            {!tourGuide.description ? (
              <div className="skeleton-container">
                <Skeleton.Input active size="small" className="skeleton" />
                <Skeleton.Input
                  active
                  size="small"
                  className="skeleton-small"
                />
              </div>
            ) : tourGuide.description.split(' ').length < 55 ? (
              tourGuide.description
            ) : (
              <span>
                {tourGuide.description.split(' ').slice(0, 55).join(' ')}
                <a href="#" className="see-more">
                  {' '}
                  See more ..
                </a>
              </span>
            )}
          </Row>
        </Col>
        <Col span={4} className="col-align">
          <Row justify="end">
            <Tooltip placement="top" title="See more" arrowPointAtCenter>
              <EllipsisOutlined className="icon-size" />
            </Tooltip>
          </Row>
          <Row justify="end">
            <Button text="Hire me" type="primary">
              Hire me
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
export default TourGuideCard;
