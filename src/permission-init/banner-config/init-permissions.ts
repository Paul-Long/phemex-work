import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'BANNER_CONFIGURE',
    remark: 'P2P_Management',
    name: 'Banner_Configure',
    resourceKeyList: ['P2P_MANAGEMENT', 'P2P_MANAGEMENT.BANNER_CONFIGURE'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
