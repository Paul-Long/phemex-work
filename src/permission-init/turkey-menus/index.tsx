import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';
import {handleInitPermissions} from './init-permissions';
import {handleInitRoles} from './init-roles';

export function TurkeyMenus() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Page</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
    </Space>
  );
}
