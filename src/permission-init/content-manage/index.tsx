import React from 'react';
import {Divider, Tabs} from 'antd';
import {SubscribeRegistrationLandingPage} from '@/permission-init/content-manage/subscribe-registration-landing-page';

export function ContentManage() {
  return (
    <>
      <Divider plain orientation="left">
        Content Management
      </Divider>
      <Tabs defaultActiveKey="Subscribe & Registration Landing Page">
        <Tabs.TabPane tab="Subscribe & Registration Landing Page" key="Subscribe & Registration Landing Page">
          <SubscribeRegistrationLandingPage />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
