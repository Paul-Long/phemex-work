import React from 'react';
import {Button, Space} from 'antd';
import {handleInitApiKyc} from './init-api';
import {handleInitPermissions} from './init-permissions';
import {handleInitRoles} from './init-roles';
import {handleLoadPermissions} from './load-permissons';

export function PersonalKyc() {
  return (
    <Space>
      <Button onClick={handleInitApiKyc}>Init APIS</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
      <Button onClick={handleLoadPermissions}>Check Permission</Button>
    </Space>
  );
}
