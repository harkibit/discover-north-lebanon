import React from 'react';
import { Button } from 'antd';
import './Button.css';

export default function ButtonComponont({ buttonWidth, text, type, onClick }) {
  const buttonStyle = document.body.style;
  buttonStyle.setProperty('--width', buttonWidth);
  return (
    <div>
      <Button className="button" type={type} onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}
