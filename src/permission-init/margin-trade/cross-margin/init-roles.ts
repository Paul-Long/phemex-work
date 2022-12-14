import {apis} from '../../utils';

const adminRole = {
  name: 'Margin_Trade_Configuration',
  remark: 'Margin_Trade',
  parentId: 0,
  permission: ['CROSS_MARGIN'],
};

const roles = [
  {
    name: 'Cross_Margin',
    remark: 'Margin_Trade',
    permission: ['CROSS_MARGIN'],
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
