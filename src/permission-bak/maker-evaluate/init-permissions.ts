import {apis} from '../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'MAKER_EVALUATE_CONFIGURE',
    remark: 'P2P_Management',
    name: 'MAKER_EVALUATE_CONFIGURE',
    resourceKeyList: ['P2P_MANAGEMENT', 'P2P_MANAGEMENT.MAKER_EVALUATE_CONFIGURE'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
