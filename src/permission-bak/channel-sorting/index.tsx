import React from 'react';
import {Button, Space} from 'antd';
import {handleInitPages} from './init-pages';
import {handleInitPermissions} from './init-permissions';
import {handleInitRoles} from './init-roles';

export function ChannelSorting() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
    </Space>
  );
}
