import {apis} from '../../permission-init/utils';

const parentKey = 'Deposit_And_Withdrawal';

const roles = [
  {
    name: 'KYC Withdrawal Limit',
    remark: 'Deposit_And_Withdrawal',
    permission: ['KYC_WITHDRAWAL_LIMIT'],
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
