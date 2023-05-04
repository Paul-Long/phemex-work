import {apis} from '../../permission-init/utils';

const parentKey = 'ContentManagement';

const roles = [
  {
    name: 'Register Config',
    remark: 'ContentManagement',
    permission: ['REGISTER_CONFIG'],
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
