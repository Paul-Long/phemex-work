import {apis} from '../../permission-init/utils';

const parentKey = 'Base_Configuration';

const roles = [
  {
    name: 'Spot Fee Promotion',
    remark: 'Base_Configuration',
    permission: ['SPOT_FEE_PROMOTION'],
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
