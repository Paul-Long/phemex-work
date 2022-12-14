import React from 'react';
import {Button, Space} from 'antd';
import {handleInitApiResource} from './init-resource';
import {handleInitPermissions} from './init-permissions';
import {handleInitRoles} from './init-roles';
import {phpPermissions} from './php-permissions';

export function RechargeCompensation() {
  return (
    <Space>
      <Button onClick={handleInitApiResource}>Init Resources</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
      <Button onClick={phpPermissions}>Get PHP Permissions</Button>
    </Space>
  );
}
