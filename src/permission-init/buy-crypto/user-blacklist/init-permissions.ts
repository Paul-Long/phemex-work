import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.USER_BLACKLIST',
    remark: 'Buy_Crypto',
    name: 'User_Blacklist',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.USER_BLACKLIST'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
