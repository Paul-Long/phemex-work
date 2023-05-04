import {apis} from '../../permission-init/utils';

const adminRole = {
  name: '[TR] ADMIN',
  remark: '[TR] Permission',
  parentId: 0,
  permission: ['TURKEY_VIEW', 'TURKEY_DEPOSIT_APPROVE'],
};

const roles = [
  {
    name: '[TR] All View',
    remark: '[TR] Permission',
    permission: ['TURKEY_VIEW'],
  },
  {
    name: '[TR] Deposit Approve',
    remark: '[TR] Permission',
    permission: ['TURKEY_DEPOSIT_APPROVE'],
  },
];

export async function handleInitRoles() {
  await apis.addRole(adminRole);
  const {data} = await apis.queryRole();
  const parent = data?.rows?.find((r) => r.name === adminRole?.name);
  if (!parent) {
    return;
  }
  for (let i = 0; i < roles.length; i++) {
    await apis.addRole({...roles[i], parentId: parent.id});
  }
}
