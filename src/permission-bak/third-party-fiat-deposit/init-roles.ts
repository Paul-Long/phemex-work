import {apis} from '../../permission-init/utils';

const adminRole = {
  name: 'Third_Party_Management',
  remark: 'Third_Party_Management',
  parentId: 0,
  permission: ['THIRD_PARTY_FIAT_DEPOSIT', 'BANNER_CONFIGURE'],
};

const roles = [
  {
    name: 'B2B2C_History',
    remark: 'Third_Party_Management',
    permission: ['THIRD_PARTY_FIAT_DEPOSIT'],
  },
  {
    name: 'B2B2C_Announcement',
    remark: 'Third_Party_Management',
    permission: ['BANNER_CONFIGURE'],
  },
];

export async function handleInitRoles() {
  await apis.addRole(adminRole);
  const {data} = await apis.queryRole();
  const parent = data?.rows?.find((r) => r.name === adminRole.name);
  if (!parent) {
    return;
  }
  for (let i = 0; i < roles.length; i++) {
    await apis.addRole({...roles[i], parentId: parent.id});
  }
}
