import React from 'react';
import {Init} from '@/permission-init/components';

const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'USER_FIAT_ACCOUNT';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'User Fiat Account';
const name = resourceName.replace(' ', '_');
const content = '/home/buy-crypto/user-fiat-account';

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
      sortNum: 7,
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

export function UserFiatAccount() {
  return <Init {...props} />;
}
