import {apis} from '../utils';

const parentKey = 'Operation_Activity';

const roles = [
  {
    name: 'World_Cup_Trading_Competition',
    remark: 'Operation_Activity',
    permission: ['WORLD_CUP_TRADING_COMPETITION'],
  },
];

export async function handleInitRoles() {
  const {data} = await apis.queryRole();
  const parent = data?.rows?.find((r) => r.name === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < roles.length; i++) {
    await apis.addRole({...roles[i], parentId: parent.id});
  }
}
