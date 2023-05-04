import {apis} from '../../../permission-init/utils';

const parentKey = 'Contract_Management';

const roles = [
  {
    name: 'Copy Trader Commentary Manage',
    remark: 'Contract_Management',
    permission: ['COPY_TRADER_COMMENTARY_MANAGE'],
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
