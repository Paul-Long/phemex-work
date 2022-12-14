import {apis} from '../utils';

const adminRole = {
  name: 'Personal KYC Admin',
  remark: 'Personal KYC',
  parentId: 0,
  permission: ['Personal_KYC_Admin'],
};

const roles = [
  // {
  //   name: 'Personal KYC View',
  //   remark: 'Personal KYC',
  //   permission: ['Personal_KYC_View'],
  // },
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
