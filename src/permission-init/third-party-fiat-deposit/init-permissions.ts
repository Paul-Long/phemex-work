import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'THIRD_PARTY_FIAT_DEPOSIT',
    remark: 'Third_Party_Management',
    name: 'Third Party Fiat Deposit',
    resourceKeyList: ['THIRD_PARTY_MANAGEMENT', 'THIRD_PARTY_MANAGEMENT.THIRD_PARTY_FIAT_DEPOSIT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
