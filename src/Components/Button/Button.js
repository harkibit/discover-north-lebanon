import React from 'react';
import { Button } from 'antd';

export default function ButtonComponont({
  text,
  type,
  textSize,
  functionality,
}) {
  const btnstylee = {
    fontSize: textSize,
    height: 'auto',
  };

  return (
    <div>
      <Button
        style={btnstylee}
        type={type}
        shape="round"
        onClick={functionality}
      >
        {text}
      </Button>
    </div>
  );
}
