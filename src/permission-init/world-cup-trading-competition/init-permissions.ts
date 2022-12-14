import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'WORLD_CUP_TRADING_COMPETITION',
    remark: 'Operation_Activity',
    name: 'World_Cup_Trading_Competition',
    resourceKeyList: ['ACTIVITY', 'ACTIVITY.WORLD_CUP_TRADING_COMPETITION'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
