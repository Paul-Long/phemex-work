import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'VIP_WITHDRAWAL_WHITELIST',
    remark: 'Deposit_And_Withdrawal',
    name: 'VIP Withdrawal Whitelist',
    resourceKeyList: ['DEPOSIT_WITHDRAWAL', 'DEPOSIT_WITHDRAWAL.VIP_WITHDRAWAL_WHITELIST'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
