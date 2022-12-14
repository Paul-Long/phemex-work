import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'TR_WITHDRAW_APPROVE',
    remark: '[TR] Permission',
    name: '[TR] Withdraw Approve',
    resourceKeyList: [
      'TR.ASSETS_MANAGEMENT',
      'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST',
      'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST.APPROVE',
    ],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
