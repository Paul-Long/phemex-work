import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'CHANNEL_SORTING_MANAGEMENT',
    remark: 'Fiat_Management',
    name: 'Channel_Sorting_Management',
    resourceKeyList: ['FIAT_MANAGEMENT', 'FIAT_MANAGEMENT.CHANNEL_SORTING'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
