import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import './Like.css';

export default function Like() {
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div>
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
          <HeartFilled className="heartFilled heartSize" onClick={toggleLike} />
        )}
      </Tooltip>
    </div>
  );
}
