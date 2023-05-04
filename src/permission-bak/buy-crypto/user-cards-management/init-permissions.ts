import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'USER_CARDS_MANAGEMENT',
    remark: 'Buy_Crypto',
    name: 'User_Cards_Management',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.USER_CARDS_MANAGEMENT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
