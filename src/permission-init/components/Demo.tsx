import React from 'react';
import {Init} from '@/permission-init/components';

const pageParentKey = 'Parent';
const roleParentKey = 'Parent';
const key = 'Key';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'Name';
const name = resourceName.replace(' ', '_');
const content = ''

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
      sortNum: 0,
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

export function Demo() {
  return <Init {...props} />;
}
