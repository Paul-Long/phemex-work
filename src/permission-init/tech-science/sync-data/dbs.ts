const pageParentKey = 'SYNC_DATA';
const roleParentKey = 'Tech Science Super';
const key = 'DBS';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'dbs';
const name = resourceName.replace(/ /g, '_');
const content = '/data/dbs';

export const props = {
  page: {
    parentKey: pageParentKey,
  },
  role: {
    parentKey: roleParentKey,
  },
  resources: [
    {
      namespace: 3,
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
