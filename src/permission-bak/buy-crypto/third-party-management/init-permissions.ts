import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.THIRD_PARTY_ORDERS',
    remark: 'Buy_Crypto',
    name: 'Third_Party_Orders',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.THIRD_PARTY_ORDERS'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
