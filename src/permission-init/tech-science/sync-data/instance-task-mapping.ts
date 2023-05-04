const pageParentKey = 'SYNC_DATA';
const roleParentKey = 'Tech Science Super';
const key = 'INSTANCE_TASK_MAPPING';
const resourceKey = `${pageParentKey}.${key}`;
const resourceName = 'instance task mapping';
const name = resourceName.replace(/ /g, '_');
const content = '/data/instance-task-mapping';

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
