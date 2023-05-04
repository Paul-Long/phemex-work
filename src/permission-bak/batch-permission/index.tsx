import React from 'react';
import {Button, Space} from 'antd';
import {initPermission} from './init-permission';

export function BatchPermission() {
  return (
    <Space>
      <Button onClick={initPermission}>Open Auth</Button>
    </Space>
  );
}
