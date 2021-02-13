import React from 'react';
import './Dropdown.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function DropdownButton(props) {
  const menu = (
    <Menu>
      {props.list.map((item) => (
        <Menu.Item className="items"> {item} </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <Button
          className="dropButton"
          type={props.buttonType}
          shape={props.buttonshape}
        >
          {props.buttonText} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
