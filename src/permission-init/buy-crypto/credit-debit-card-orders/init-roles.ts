import {apis} from '../../utils';

const parentKey = 'Buy_Crypto';

const roles = [
  {
    name: 'Credit/Debit_Card_Orders',
    remark: 'Buy_Crypto',
    permission: ['BUY_CRYPTO.CREDIT_DEBIT_CARD_ORDERS'],
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
