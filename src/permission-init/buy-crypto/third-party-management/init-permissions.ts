import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.THIRD_PARTY_FIAT_DEPOSIT',
    remark: 'Buy_Crypto',
    name: 'Third_Party_Fiat_Deposit',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.THIRD_PARTY_FIAT_DEPOSIT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
