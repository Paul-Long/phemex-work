const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'USER_CARDS_MANAGEMENT';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'User Cards Management';
const name = resourceName.replace(/ /g, '_');
const content = '/home/buy-crypto/user-cards-management';

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
      sortNum: 5,
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
