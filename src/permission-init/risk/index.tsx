import React from 'react';
import {Button, Space} from 'antd';
import {handleInitApiCheckpoint} from './init-api-checkpoint';
import {handleInitApiPolicy} from './init-api-policy';
import {handleInitApiRule} from './init-api-rule';
import {handleInitPages} from './init-pages';
import {handleInitRoles} from './init-roles';
import {handleInitPermissions} from './init-permissions';

export function Risk() {
  return (
    <Space>
      <Button onClick={handleInitPages}>Init Pages</Button>
      <Button onClick={handleInitApiRule}>Init Api Rule</Button>
      <Button onClick={handleInitApiPolicy}>Init Api Policy</Button>
      <Button onClick={handleInitApiCheckpoint}>Init Api Checkpoint</Button>
      <Button onClick={handleInitPermissions}>Init Api Permissions</Button>
      <Button onClick={handleInitRoles}>Init Api Roles</Button>
    </Space>
  );
}
