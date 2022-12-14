import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'SPOT_FEE_PROMOTION',
    remark: 'Base_Configuration',
    name: 'Spot Fee Promotion',
    resourceKeyList: ['BASE_CONFIGURATION', 'BASE_CONFIGURATION.SPOT_FEE_PROMOTION'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
