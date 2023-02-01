import {apis} from '@/permission-init/utils';

export const handleInitPages = (resources, parentKey) => async () => {
  let parent;
  if (parentKey) {
    const {data} = await apis.queryResource();
    parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  }
  if (!parent && parentKey) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    const item = {...resources[i]};
    if (parent) {
      item.parentId = parent.id;
    }
    await apis.addResource(item);
  }
}

export const handleInitPermissions = (permissions) => async () => {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}

export const handleInitRoles = (roles, parentKey) => async () => {
  let parent;
  if (parentKey) {
    const {data} = await apis.queryRole();
    parent = data?.rows?.find((r) => r.name === parentKey);
  }
  if (!parent && parentKey) {
    return;
  }
  for (let i = 0; i < roles.length; i++) {
    const item = {...roles[i]};
    if (parent) {
      item.parentId = parent.id;
    }
    await apis.addRole(item);
  }
}
