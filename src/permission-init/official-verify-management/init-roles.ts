import {apis} from '../utils';

const parentKey = 'Official_Verify';

const roles = [
  {
    name: 'Official_Verify_Management',
    remark: 'Official_Verify_Management',
    permission: ['OFFICIAL_VERIFY.MANAGEMENT'],
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
