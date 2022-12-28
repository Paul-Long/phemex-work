import React from 'react';
import {Divider, Tabs} from 'antd';
import {LimitManagement} from '@/permission-init/user-management/limit-management';

export function UserManagement() {
  return (
    <>
      <Divider plain orientation="left">
        User_Management
      </Divider>
      <Tabs defaultActiveKey="Limit Management">
        <Tabs.TabPane tab="Limit Management" key="Limit Management">
          <LimitManagement />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
