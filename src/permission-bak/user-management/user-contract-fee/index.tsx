import React from 'react';
import {Button, Space} from 'antd';
import {handleInitApis} from './init-apis';
import {handleInitPermissions} from './init-permissions';
import {handleInitRoles} from './init-roles';

export function UserContractFee() {
  return (
    <Space>
      <Button onClick={handleInitApis}>Init Apis</Button>
      <Button onClick={handleInitPermissions}>Init Permissions</Button>
      <Button onClick={handleInitRoles}>Init Roles</Button>
    </Space>
  );
}
