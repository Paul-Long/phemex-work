import {apis} from '../../../permission-init/utils';

const parentKey = 'User_Management';

const roles = [
  {
    name: 'Api_IP_List',
    remark: 'User Management',
    permission: ['API_IP_LIST'],
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
