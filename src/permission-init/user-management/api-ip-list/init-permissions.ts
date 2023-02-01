import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'API_IP_LIST',
    remark: 'User_Management',
    name: 'Api_IP_List',
    resourceKeyList: ['USER_MANAGEMENT', 'USER_MANAGEMENT.API_IP_LIST'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
