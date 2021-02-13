import React from 'react';
import { Button } from 'antd';
import './Button.css';
export default function ButtonComponent({ text, type, onClick }) {
  return (
    <div>
      <Button className="button" type={type} shape="round" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
