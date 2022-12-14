import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';

export function TechScience1() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
    </Space>
  );
}
