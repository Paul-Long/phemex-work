import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.ANNOUNCEMENT',
    remark: 'Buy_Crypto',
    name: 'Announcement',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.ANNOUNCEMENT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
