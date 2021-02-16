import React from 'react';
import './UserInfo.css';
import { Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Text } = Typography;

function UserInfoComponent({ userInfo }) {
  return (
    <div className="flex">
      <div>
        <img src={userInfo.imgSrc} />
      </div>
      <div className="nameBloc">
        <Text>{userInfo.name}</Text>
        <div className="editText">
          <EditOutlined style={{ fontSize: '12px', color: '#455A64' }} />
          <Text> Edit</Text>
        </div>
      </div>
    </div>
  );
}

export default UserInfoComponent;
