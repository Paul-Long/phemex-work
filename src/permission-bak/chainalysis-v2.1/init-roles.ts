import {apis} from '../../permission-init/utils';

const parentKey = 'Deposit_And_Withdrawal';

const roles = [
  {
    name: 'Deposit Slip Approve',
    remark: 'Deposit_And_Withdrawal',
    permission: ['DEPOSIT_SLIP_APPROVE'],
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
