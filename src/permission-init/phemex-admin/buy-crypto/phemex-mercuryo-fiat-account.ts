const pageParentKey = 'BUY_CRYPTO';
const roleParentKey = 'Buy_Crypto';
const key = 'PHEMEX_MERCURYO_FIAT_ACCOUNT';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'Phemex-Mercuryo Fiat Account';
const name = resourceName.replace(/ /g, '_');
const content = '/home/buy-crypto/phemex-mercuryo-fiat-account';

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
      sortNum: 13,
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
