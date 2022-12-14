import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'Personal_KYC_Admin',
    remark: 'Personal KYC',
    name: 'Personal KYC Admin',
    resourceKeyList: [
      'USER_MANAGEMENT',
      'USER_MANAGEMENT.KYC_LIST',
      'USER_MANAGEMENT.KYC_LIST.VERIFY',
      'USER_MANAGEMENT.KYC_LIST.UNVERIFY',
      'USER_MANAGEMENT.KYC_LIST.MODIFY',
    ],
  },
  // {
  //   permissionKey: 'Personal_KYC_View',
  //   remark: 'Personal KYC',
  //   name: 'Personal KYC View',
  //   resourceKeyList: ['USER_MANAGEMENT', 'USER_MANAGEMENT.KYC_LIST'],
  // },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
