import React from 'react';
import {Button, Space} from 'antd';
import {handleLoadPermissions} from './load-permissons';
import {handleInitAgentAudit} from './init-agent-audit';

export function BdManagement() {
  return (
    <Space>
      <Button onClick={handleLoadPermissions}>Check Permissions</Button>
      <Button onClick={handleInitAgentAudit}>Init Agent Audit</Button>
    </Space>
  );
}
