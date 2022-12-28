import React from 'react';
import {Tabs} from 'antd';
import {BuyCryptoPane} from '@/permission-init/buy-crypto/BuyCryptoPane';
import {ContentManage} from '@/permission-init/content-manage';
import {ContractManage} from '@/permission-init/contract-manage';
import {MarginTrade} from '@/permission-init/margin-trade';
import {UserManagement} from '@/permission-init/user-management';
import {WithdrawalRequest} from '@/permission-init/withdrawal-request';
import {Login} from './Login';
import {CheckPermission} from './check-permission';

export function InitPermission() {
  return (
    <Tabs defaultActiveKey="Login" tabPosition="left" style={{height: '100%'}}>
      <Tabs.TabPane tab="Login" key="Login">
        <Login />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Init Permission" key="Init Permission">
        <ContentManage />

        <ContractManage />

        <MarginTrade />

        <WithdrawalRequest />

        <UserManagement />

        <BuyCryptoPane />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Check Permission" key="Check Permission">
        <CheckPermission />
      </Tabs.TabPane>
    </Tabs>
  );
}

function Item({title, children}) {
  return (
    <Tabs.TabPane tab={title} key={title}>
      {children}
    </Tabs.TabPane>
  );
}
