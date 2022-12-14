import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'OFFICIAL_VERIFY.MANAGEMENT',
    remark: 'Official_Verify_Management',
    name: 'Official_Verify_Management',
    resourceKeyList: ['OFFICIAL_VERIFY.MANAGEMENT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
