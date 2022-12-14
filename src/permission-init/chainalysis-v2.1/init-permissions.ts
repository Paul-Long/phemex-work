import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'DEPOSIT_SLIP_APPROVE',
    remark: 'Deposit_And_Withdrawal',
    name: 'Deposit Slip Approve',
    resourceKeyList: [
      'DEPOSIT_WITHDRAWAL',
      'DEPOSIT_WITHDRAWAL.DEPOSIT_SLIP_MANAGEMENT',
      'DEPOSIT_WITHDRAWAL.DEPOSIT_SLIP_MANAGEMENT.APPROVE',
    ],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
