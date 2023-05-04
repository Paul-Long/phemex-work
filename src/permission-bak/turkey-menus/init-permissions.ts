import {apis} from '../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'TURKEY_VIEW',
    remark: '[TR] Permission',
    name: '[TR] All View',
    resourceKeyList: [
      'TR.USER_MANAGEMENT',
      'TR.USER_MANAGEMENT.USER_LIST',
      'TR.USER_MANAGEMENT.USER_DETAIL',
      'TR.USER_MANAGEMENT.PERSONAL_KYC',
      'TR.USER_MANAGEMENT.REFERRAL_PROGRAM',
      'TR.USER_MANAGEMENT.REFERRAL_PROGRAM_DETAIL',
      'TR.ASSETS_MANAGEMENT',
      'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST',
      'TR.ASSETS_MANAGEMENT.WITHDRAWAL_HOT_WALLET',
      'TR.ASSETS_MANAGEMENT.DEPOSIT_SLIP_MANAGEMENT',
      'TR.ASSETS_MANAGEMENT.AML_BLACK_LIST',
      'TR.OPERATION_ACTIVITY',
      'TR.OPERATION_ACTIVITY.TR_DEPOSIT_PROMOTION',
      'TR.OPERATION_MANAGEMENT',
      'TR.OPERATION_MANAGEMENT.APP_EDITION_MANAGEMENT',
      'TR.CONTENT_MANAGEMENT',
      'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT',
      'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT_CREATE',
      'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT_RECORD',
    ],
  },
  {
    permissionKey: 'TURKEY_DEPOSIT_APPROVE',
    remark: '[TR] Permission',
    name: '[TR] Deposit Approve',
    resourceKeyList: [
      'TR.ASSETS_MANAGEMENT',
      'TR.ASSETS_MANAGEMENT.DEPOSIT_SLIP_MANAGEMENT',
      'TR.ASSETS_MANAGEMENT.DEPOSIT_SLIP_MANAGEMENT.APPROVE',
    ],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
