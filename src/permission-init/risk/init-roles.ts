import {apis} from '../utils';

const adminRole = {name: 'Risk Manage Admin', remark: 'Risk Manage', permission: ['Risk_Manage_Admin']};

const roles = [
  {name: 'Risk Manage Edit', remark: 'Risk Manage', permission: ['Risk_Manage_Edit']},
  {name: 'Risk Manage View', remark: 'Risk Manage', permission: ['Risk_Manage_View']},
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
