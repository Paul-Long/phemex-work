const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'CARD_RECONCILIATION_INFO';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'Card Reconciliation Info';
const name = resourceName.replace(/ /g, '_');
const content = '/home/buy-crypto/card-reconciliation-info';

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
      sortNum: 11,
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
