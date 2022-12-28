import {apis} from '../../utils';

const parentKey = 'Buy_Crypto';

const roles = [
  {
    name: 'Third_Party_Fiat_Deposit',
    remark: 'Buy_Crypto',
    permission: ['BUY_CRYPTO.THIRD_PARTY_FIAT_DEPOSIT'],
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
