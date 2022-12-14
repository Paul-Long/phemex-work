import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'LIMIT_MANAGEMENT',
    remark: 'User_Management',
    name: 'Limit Management',
    resourceKeyList: ['USER_MANAGEMENT', 'USER_MANAGEMENT.LIMIT_MANAGEMENT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
