import React from 'react';
import {Button, Divider, Tabs} from 'antd';
import {handleInitPermission} from './permission';
import {Login} from './Login';
import {Risk} from './risk';
import {RechargeCompensation} from './recharge-compensation';
import {PersonalKyc} from './personal-kyc';
import {GrayManagement} from './gray-management';
import {BdManagement} from './bd-management';
import {TurkeyMenus} from './turkey-menus';
import {UserContractFee} from './user-management/user-contract-fee';
import {ThirdPartyFiatDeposit} from './third-party-fiat-deposit';
import {SpotFeePromotion} from './spot-fee-promotion';
import {ChainalysisV21} from './chainalysis-v2.1';
import {OfficialVerifyManagement} from './official-verify-management';
import {TechScience} from './tech-science';
import {TechScience1} from './tech-science-1';
import {KycWithdrawalLimit} from './kyc-withdrawal-limit';
import {RegisterConfig} from './register-config-v1.0';
import {ChannelSorting} from './channel-sorting';
import {Agent25} from './agent-2.5';
import {BannerConfig} from './banner-config';
import {TrWithdrawApprove} from './tr-withdraw-approve';
import {MakerEvaluate} from './maker-evaluate';
import {WorldCupTradingCompetition} from './world-cup-trading-competition';
import {SubscribeRegistrationLandingPage} from './content-manage/subscribe-registration-landing-page';
import {CommentaryManage} from './contract-manage/commentary-manage';
import {CrossMargin} from './margin-trade/cross-margin';
import {VipWithdrawalWhitelist} from './withdrawal-request/vip-withdrawal-whitelist';
import {LimitManagement} from './user-management/limit-management';

export function InitPermission() {
  return (
    <>
      <Login />
      <Divider plain orientation="left">
        Content Management
      </Divider>
      <Tabs>
        <Tabs.TabPane tab="Subscribe & Registration Landing Page">
          <SubscribeRegistrationLandingPage />
        </Tabs.TabPane>
      </Tabs>
      <Divider plain orientation="left">
        Contract Management
      </Divider>
      <Tabs>
        <Tabs.TabPane tab="Trader Commentary">
          <CommentaryManage />
        </Tabs.TabPane>
      </Tabs>
      <Divider plain orientation="left">
        Margin Trade
      </Divider>
      <Tabs>
        <Tabs.TabPane tab="Cross Margin">
          <CrossMargin />
        </Tabs.TabPane>
      </Tabs>
      <Divider plain orientation="left">
        Deposit_And_Withdrawal
      </Divider>
      <Tabs>
        <Tabs.TabPane tab="Vip Withdrawal Whitelist">
          <VipWithdrawalWhitelist />
        </Tabs.TabPane>
      </Tabs>
      <Divider plain orientation="left">
        User_Management
      </Divider>
      <Tabs>
        <Tabs.TabPane tab="Limit Management">
          <LimitManagement />
        </Tabs.TabPane>
      </Tabs>
      <Divider plain orientation="left">
        Init Permission
      </Divider>
      <Button onClick={handleInitPermission}>Init Permission</Button>
      <Divider plain orientation="left">
        Risk
      </Divider>
      <Risk />
      <Divider plain orientation="left">
        User Recharge Compensation
      </Divider>
      <RechargeCompensation />
      <Divider plain orientation="left">
        Personal KYC
      </Divider>
      <PersonalKyc />
      <Divider plain orientation="left">
        Gray
      </Divider>
      <GrayManagement />
      <Divider plain orientation="left">
        BD Management
      </Divider>
      <BdManagement />
      <Divider plain orientation="left">
        Turkey Menus
      </Divider>
      <TurkeyMenus />
      <Divider plain orientation="left">
        User Management - User Detail - Contract Fee Rate
      </Divider>
      <UserContractFee />
      <Divider plain orientation="left">
        Third Party Fiat Deposit
      </Divider>
      <ThirdPartyFiatDeposit />
      <Divider plain orientation="left">
        Spot Fee Promotion
      </Divider>
      <SpotFeePromotion />
      <Divider plain orientation="left">
        Chainalysis V2.1
      </Divider>
      <ChainalysisV21 />
      <Divider plain orientation="left">
        Official Verify Management V1.0
      </Divider>
      <OfficialVerifyManagement />
      <Divider plain orientation="left">
        Tech Science
      </Divider>
      <TechScience />
      <Divider plain orientation="left">
        Tech Science 1
      </Divider>
      <TechScience1 />
      <Divider plain orientation="left">
        KYC Withdrawal Limit
      </Divider>
      <KycWithdrawalLimit />
      <Divider plain orientation="left">
        Register Config V1.0
      </Divider>
      <RegisterConfig />
      <Divider plain orientation="left">
        Channel Sorting V1.0
      </Divider>
      <ChannelSorting />
      <Divider plain orientation="left">
        Agent V2.5
      </Divider>
      <Agent25 />
      <Divider plain orientation="left">
        Banner Configure
      </Divider>
      <BannerConfig />
      <Divider plain orientation="left">
        [TR] Withdraw Approve
      </Divider>
      <TrWithdrawApprove />
      <Divider plain orientation="left">
        Maker Evaluate Date Configure
      </Divider>
      <MakerEvaluate />
      <Divider plain orientation="left">
        Squad Battle
      </Divider>
      <WorldCupTradingCompetition />
    </>
  );
}
