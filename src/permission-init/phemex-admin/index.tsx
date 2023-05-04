import _ from 'lodash';
import React from 'react';
import {PageLayout} from '@/permission-init/components/PageLayout';
import {buyCrypto} from './buy-crypto';

export function PhemexAdmin() {
  return <PageLayout menus={menus} contents={contents} />;
}

const menus = [
  {
    key: 'buy_crypto',
    label: 'Buy Crypto',
    children: Object.keys(buyCrypto).map((key) => ({key, label: _.startCase(key)})),
  },
];
const contents: any = {
  ...buyCrypto,
};
