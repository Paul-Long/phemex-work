import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.OTC_HISTORY',
    remark: 'Buy_Crypto',
    name: 'OTC_History',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.OTC_HISTORY'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
