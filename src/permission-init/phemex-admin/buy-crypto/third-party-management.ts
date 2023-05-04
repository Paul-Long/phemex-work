const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'THIRD_PARTY_ORDERS';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'Third Party Orders';
const name = resourceName.replace(/ /g, '_');
const content = '/home/buy-crypto/third-party-orders';

export const props = {
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
      sortNum: 3,
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
