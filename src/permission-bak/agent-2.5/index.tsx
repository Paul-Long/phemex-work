import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';
import {handleInitPermissions} from './init-permissions';

export function Agent25() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
    </Space>
  );
}
