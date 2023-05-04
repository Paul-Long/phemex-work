import {apis} from '../../permission-init/utils';

const parentKey = 'DEPOSIT_WITHDRAWAL';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'DEPOSIT_WITHDRAWAL.KYC_WITHDRAWAL_LIMIT',
    name: 'KYC Withdrawal Limit',
    content: '/home/deposit-withdrawal/kyc-withdrawal-limit',
    api: '',
    sortNum: 18,
    isRoute: 1,
  },
];

export async function handleInitPages() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
