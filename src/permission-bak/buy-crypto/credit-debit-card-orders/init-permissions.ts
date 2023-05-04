import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.CREDIT_DEBIT_CARD_ORDERS',
    remark: 'Buy_Crypto',
    name: 'Credit/Debit_Card_Orders',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.CREDIT_DEBIT_CARD_ORDERS'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
