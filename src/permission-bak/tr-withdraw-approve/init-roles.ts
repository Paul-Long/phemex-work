import {apis} from '../../permission-init/utils';

const parentKey = '[TR] ADMIN';

const roles = [
  {
    name: '[TR] Withdraw Approve',
    remark: '[TR] Permission',
    permission: ['TR_WITHDRAW_APPROVE'],
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
