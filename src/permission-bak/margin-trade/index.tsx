import React from 'react';
import {Divider, Tabs} from 'antd';
import {CrossMargin} from '@/permission-bak/margin-trade/cross-margin';

export function MarginTrade() {
  return (
    <>
      <Divider plain orientation="left">
        Margin Trade
      </Divider>
      <Tabs defaultActiveKey="Cross Margin">
        <Tabs.TabPane tab="Cross Margin" key="Cross Margin">
          <CrossMargin />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
