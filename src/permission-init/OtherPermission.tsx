import React from 'react';
import {Button, Divider, Tabs} from 'antd';
import {Agent25} from '@/permission-init/agent-2.5';
import {BannerConfig} from '@/permission-init/banner-config';
import {BdManagement} from '@/permission-init/bd-management';
import {ChainalysisV21} from '@/permission-init/chainalysis-v2.1';
import {ChannelSorting} from '@/permission-init/channel-sorting';
import {GrayManagement} from '@/permission-init/gray-management';
import {KycWithdrawalLimit} from '@/permission-init/kyc-withdrawal-limit';
import {MakerEvaluate} from '@/permission-init/maker-evaluate';
import {OfficialVerifyManagement} from '@/permission-init/official-verify-management';
import {handleInitPermission} from '@/permission-init/permission';
import {PersonalKyc} from '@/permission-init/personal-kyc';
import {RechargeCompensation} from '@/permission-init/recharge-compensation';
import {RegisterConfig} from '@/permission-init/register-config-v1.0';
import {Risk} from '@/permission-init/risk';
import {SpotFeePromotion} from '@/permission-init/spot-fee-promotion';
import {TechScience} from '@/permission-init/tech-science';
import {TechScience1} from '@/permission-init/tech-science-1';
import {ThirdPartyFiatDeposit} from '@/permission-init/third-party-fiat-deposit';
import {TrWithdrawApprove} from '@/permission-init/tr-withdraw-approve';
import {TurkeyMenus} from '@/permission-init/turkey-menus';
import {UserContractFee} from '@/permission-init/user-management/user-contract-fee';
import {WorldCupTradingCompetition} from '@/permission-init/world-cup-trading-competition';

export function OtherPermission() {
  return (
    <Tabs defaultActiveKey="Other Permission">
      <Tabs.TabPane tab="Other Permission" key="Other Permission">
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
      </Tabs.TabPane>
    </Tabs>
  );
}
