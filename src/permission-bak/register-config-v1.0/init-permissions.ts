import {apis} from '../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'REGISTER_CONFIG',
    remark: 'ContentManagement',
    name: 'Register Config',
    resourceKeyList: ['CONTENT_MANAGE', 'CONTENT_MANAGE.REGISTER_CONFIG'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
