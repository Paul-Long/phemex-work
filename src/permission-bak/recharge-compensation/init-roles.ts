import {apis} from '../../permission-init/utils';

const adminRole = {
  name: 'Recharge_Compensation',
  remark: 'Recharge_Compensation',
  parentId: 0,
  permission: ['Recharge_Compensation_OP', 'Recharge_Compensation_Tech', 'Recharge_Compensation_CS'],
};

const roles = [
  {
    name: 'Recharge_Compensation_CS',
    remark: 'Recharge_Compensation',
    permission: ['Recharge_Compensation_CS'],
  },
  {
    name: 'Recharge_Compensation_Tech',
    remark: 'Recharge_Compensation',
    permission: ['Recharge_Compensation_Tech'],
  },
  {
    name: 'Recharge_Compensation_OP',
    remark: 'Recharge_Compensation',
    permission: ['Recharge_Compensation_OP'],
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
