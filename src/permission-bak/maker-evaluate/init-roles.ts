import {apis} from '../../permission-init/utils';

const parentKey = 'P2P Management';

const roles = [
  {
    name: 'Maker_Evaluate_Configure',
    remark: 'P2P_Management',
    permission: ['MAKER_EVALUATE_CONFIGURE'],
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
