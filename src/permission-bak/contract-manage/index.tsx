import React from 'react';
import {Divider, Tabs} from 'antd';
import {CommentaryManage} from '@/permission-bak/contract-manage/commentary-manage';

export function ContractManage() {
  return (
    <>
      <Divider plain orientation="left">
        Contract Management
      </Divider>
      <Tabs defaultActiveKey="Trader Commentary">
        <Tabs.TabPane tab="Trader Commentary" key="Trader Commentary">
          <CommentaryManage />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
