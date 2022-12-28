import {apis} from '../../utils';

const parentKey = 'Buy_Crypto';

const roles = [
  {
    name: 'User_Blacklist',
    remark: 'Buy_Crypto',
    permission: ['BUY_CRYPTO.USER_BLACKLIST'],
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
