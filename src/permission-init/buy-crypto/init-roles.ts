import {apis} from '../utils';

const roles = [
  {
    name: 'Buy_Crypto',
    remark: 'Buy_Crypto',
    permission: ['BUY_CRYPTO'],
  },
];

export async function handleInitRoles() {
  for (let i = 0; i < roles.length; i++) {
    await apis.addRole({...roles[i]});
  }
}
