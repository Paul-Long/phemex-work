import React from 'react';
import {Init} from '@/permission-init/components';

const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'FIAT_DEPOSIT_ORDERS';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'Fiat Deposit Orders';
const name = resourceName.replace(' ', '_');
const content = '/home/buy-crypto/fiat-deposit-orders';

  const props = {
  page: {
    parentKey: pageParentKey,
  },
  role: {
    parentKey: roleParentKey,
  },
  resources: [
    {
      namespace: 1,
      type: 2,
      resourceKey,
      name: resourceName,
      content,
      api: '',
      sortNum: 8,
      isRoute: 1,
    },
  ],
  permissions: [
    {
      permissionKey: resourceKey,
      remark: roleParentKey,
      name: name,
      resourceKeyList: [pageParentKey, resourceKey],
    },
  ],
  roles: [
    {
      name: name,
      remark: roleParentKey,
      permission: [resourceKey],
    },
  ],
};

export function FiatDepositOrders() {
  return (
    <Init {...props} />
  )
}

