import React from 'react';
import './FeedbackForm.css';
import { Layout, Row, Col, Typography, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import ButtonComponent from '../Button/Button';
const { Title } = Typography;

function FeedbackFormComponent({ onClickFct }) {
  return (
    <div>
      <Layout className="layoutHeight">
        <Row className="rowMargin">
          <Col span={8} offset={3}>
            <Title level={2}>Your Opinion Always Matters</Title>
            <Title level={5}>
              After visiting our site, you may have some advises. We would like
              to hear them from you.
            </Title>
          </Col>

          <Col span={8} offset={1} className="colMargin">
            <Input placeholder="Express yourself" required />
          </Col>
          <Col className="col2Margin">
            <Button className="sendButton" type="primary" onClick={onClickFct}>
              Send <SendOutlined />
            </Button>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default FeedbackFormComponent;
