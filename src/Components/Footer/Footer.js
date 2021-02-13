import React from 'react';
import './Footer.css';
import { Layout, Typography, Row, Col } from 'antd';

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function FooterComponent() {
  return (
    <div>
      <Layout>
        <Footer className="background">
          <Row>
            <Col span={10} />
            <Col span={8} className="alignmentRow1">
              <Title level={3}>
                <Text className="textColor">About Us</Text>
              </Title>
              <Title level={5}>
                <Text className="textColor">About</Text>
              </Title>
              <Title level={5}>
                <Text className="textColor">Privacy Policy</Text>
              </Title>
            </Col>
            <Col span={8} />
          </Row>
          <br />
          <Row>
            <Col span={2} />
            <Col span={20} className="alignmentRow2">
              <Text className="textColor">
                {' '}
                Copyright © WeDot Wireframe Kit. All rights reserved
              </Text>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
}
