import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.OTC_LEGEND_TRADING_ORDERS',
    remark: 'Buy_Crypto',
    name: 'OTC-Legend_Trading_Orders',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.OTC_LEGEND_TRADING_ORDERS'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
