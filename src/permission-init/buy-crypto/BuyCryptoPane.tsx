import React from 'react';
import {Divider, Tabs} from 'antd';
import {Announcement} from '@/permission-init/buy-crypto/announcement';
import {CreditDebitCardOrders} from '@/permission-init/buy-crypto/credit-debit-card-orders';
import {FiatDepositOrders} from '@/permission-init/buy-crypto/fiat-deposit-orders';
import {FiatWithdrawalOrders} from '@/permission-init/buy-crypto/fiat-withdrawal-orders';
import {BuyCrypto} from '@/permission-init/buy-crypto/index';
import {OneClickOrders} from '@/permission-init/buy-crypto/one-click-orders';
import {OtcHistory} from '@/permission-init/buy-crypto/otc-history';
import {ThirdPartyManagement} from '@/permission-init/buy-crypto/third-party-management';
import {UserBlacklist} from '@/permission-init/buy-crypto/user-blacklist';
import {UserCardsManagement} from '@/permission-init/buy-crypto/user-cards-management';
import {UserFiatAccount} from '@/permission-init/buy-crypto/user-fiat-account';

export function BuyCryptoPane() {
  return (
    <>
      <Divider plain orientation="left">
        Buy_Crypto
      </Divider>
      <Tabs defaultActiveKey="buyCrypto" destroyInactiveTabPane>
        <Tabs.TabPane tab="Buy Crypto" key="buyCrypto">
          <BuyCrypto />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Credit/Debit Card Orders" key="Credit/Debit Card Orders">
          <CreditDebitCardOrders />
        </Tabs.TabPane>
        <Tabs.TabPane tab="OTC History" key="OTC History">
          <OtcHistory />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Third Party Management" key="Third Party Management">
          <ThirdPartyManagement />
        </Tabs.TabPane>
        <Tabs.TabPane tab="User Blacklist" key="User Blacklist">
          <UserBlacklist />
        </Tabs.TabPane>
        <Tabs.TabPane tab="User Cards Management" key="User Cards Management">
          <UserCardsManagement />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Announcement" key="Announcement">
          <Announcement />
        </Tabs.TabPane>
        <Tabs.TabPane tab="User Fiat Account" key="User Fiat Account">
          <UserFiatAccount />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Fiat Deposit Orders" key="Fiat Deposit Orders">
          <FiatDepositOrders />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Fiat Withdrawal Orders" key="Fiat Withdrawal Orders">
          <FiatWithdrawalOrders />
        </Tabs.TabPane>
        <Tabs.TabPane tab="One Click Buy/Sell Orders" key="One Click Buy/Sell Orders">
          <OneClickOrders />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
