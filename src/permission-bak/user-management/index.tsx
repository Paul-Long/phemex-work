import React from 'react';
import {Divider, Tabs} from 'antd';
import {LimitManagement} from '@/permission-bak/user-management/limit-management';
import {ApiIpList} from '@/permission-bak/user-management/api-ip-list';

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
        <Tabs.TabPane tab="API IP List" key="Api_IP_List">
          <ApiIpList />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
