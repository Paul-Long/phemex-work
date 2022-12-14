import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'COPY_TRADER_COMMENTARY_MANAGE',
    remark: 'Contract_Management',
    name: 'Copy Trader Commentary Manage',
    resourceKeyList: ['CONTRACT_MANAGE', 'CONTRACT_MANAGE.TRADER_COMMENTARY'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
