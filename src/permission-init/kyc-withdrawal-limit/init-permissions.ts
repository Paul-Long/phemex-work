import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'KYC_WITHDRAWAL_LIMIT',
    remark: 'Deposit_And_Withdrawal',
    name: 'KYC_Withdrawal_Limit',
    resourceKeyList: ['DEPOSIT_WITHDRAWAL', 'DEPOSIT_WITHDRAWAL.KYC_WITHDRAWAL_LIMIT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
