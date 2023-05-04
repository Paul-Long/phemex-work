import {apis} from '../../../permission-init/utils';

const parentKey = 'User_Management';

const roles = [
  {
    name: 'User Detail Contract Fee Edit&Reset',
    remark: 'User Management',
    permission: ['USER_DETAIL_CONTRACT_FEE_EDIT_RESET'],
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
