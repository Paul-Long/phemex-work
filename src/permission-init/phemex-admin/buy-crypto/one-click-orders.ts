const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'ONE_CLICK_ORDERS';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'One Click Buy/Sell Orders';
const name = resourceName.replace(/ /g, '_');
const content = '/home/buy-crypto/one-click-orders';

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
      sortNum: 10,
      isRoute: 1,
    },
  ],
  permissions: [
    {
      permissionKey: resourceKey,
      remark: roleParentKey,
      name,
      resourceKeyList: [pageParentKey, resourceKey],
    },
  ],
  roles: [
    {
      name,
      remark: roleParentKey,
      permission: [resourceKey],
    },
  ],
};
