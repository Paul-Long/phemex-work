import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';

export function GrayManagement() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
    </Space>
  );
}
