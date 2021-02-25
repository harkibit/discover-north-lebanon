import React from 'react';
import './FeedbackForm.css';
import { Layout, Row, Col, Typography, Input, Button, Form } from 'antd';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
const { Title } = Typography;

function FeedbackFormComponent({ onClickFct }) {
  return (
    <div>
      <Form>
        <Layout className="layoutHeight">
          <Row className="firstRowMargin">
            <Col span={8} offset={3}>
              <Title level={2}>Your Opinion Always Matters</Title>
              <Title level={5}>
                After visiting our site, you may have some advises. We would
                like to hear them from you.
              </Title>
            </Col>

            <hr className="hr-vertical" />

            <Col span={8} offset={-2} className="colMarginTop">
              <Form.Item>
                <Input
                  placeholder="  Your Email..."
                  prefix={<UserOutlined className="userIcon" />}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Col span={8} className="colMargin2">
              <Form.Item>
                <Input placeholder="Express yourself" required />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={17}>
              <Form.Item>
                <Button
                  className="sendButton"
                  type="primary"
                  onClick={onClickFct}
                >
                  Send <SendOutlined />
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Layout>
      </Form>
    </div>
  );
}

export default FeedbackFormComponent;
