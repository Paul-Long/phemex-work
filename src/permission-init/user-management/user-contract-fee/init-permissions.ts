import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'USER_DETAIL_CONTRACT_FEE_EDIT_RESET',
    remark: 'User_Management',
    name: 'User Detail Contract Fee Edit&Reset',
    resourceKeyList: [
      'USER_MANAGEMENT',
      'USER_MANAGEMENT.USER_DETAIL',
      'USER_MANAGEMENT.USER_DETAIL.CONTRACT_FEE_EDIT',
      'USER_MANAGEMENT.USER_DETAIL.CONTRACT_FEE_RESET',
    ],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
