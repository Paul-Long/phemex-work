import React from 'react';
import {Divider, Tabs} from 'antd';
import {VipWithdrawalWhitelist} from '@/permission-bak/withdrawal-request/vip-withdrawal-whitelist';

export function WithdrawalRequest() {
  return (
    <>
      <Divider plain orientation="left">
        Deposit_And_Withdrawal
      </Divider>
      <Tabs defaultActiveKey="Vip Withdrawal Whitelist">
        <Tabs.TabPane tab="Vip Withdrawal Whitelist" key="Vip Withdrawal Whitelist">
          <VipWithdrawalWhitelist />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
