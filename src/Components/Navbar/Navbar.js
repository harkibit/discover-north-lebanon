import React from 'react';
import { Layout, Menu } from 'antd';
import './Navbar.css';
import ButtonComponont from '../Button/Button';

export default function Navbar() {
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bugarach.JPG/1200px-Bugarach.JPG';

  return (
    <div>
      <Layout id="headerStyle">
        <div className="leftRightSides">
          <img className="logo" src={logo}></img>
          {/* the img represent our logo */}
        </div>

        <Menu className="headerStyleCenter" mode="horizontal">
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">Activities</Menu.Item>
          <Menu.Item key="3">Cities</Menu.Item>
          <Menu.Item key="4">Tour guide</Menu.Item>
        </Menu>

        <div className="leftRightSides">
          {/* here we will add the language icon dropdown */}
          <ButtonComponont text="Sign In" type="primary" />
        </div>
      </Layout>
    </div>
  );
}
