import {apis} from '../../../permission-init/utils';

const parentKey = 'Buy_Crypto';

const roles = [
  {
    name: 'Third_Party_Orders',
    remark: 'Buy_Crypto',
    permission: ['BUY_CRYPTO.THIRD_PARTY_ORDERS'],
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
