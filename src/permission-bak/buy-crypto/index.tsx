import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';
import {handleInitRoles} from './init-roles';

export function BuyCrypto() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
    </Space>
  );
}
