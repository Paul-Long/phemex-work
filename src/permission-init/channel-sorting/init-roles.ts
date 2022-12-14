import {apis} from '../utils';

const parentKey = 'Fiat_Management';

const roles = [
  {
    name: 'Channel_Sorting_Management',
    remark: 'Fiat_Management',
    permission: ['CHANNEL_SORTING_MANAGEMENT'],
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
