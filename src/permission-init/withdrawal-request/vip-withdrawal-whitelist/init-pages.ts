import {apis} from '../../utils';

const parentKey = 'DEPOSIT_WITHDRAWAL';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'DEPOSIT_WITHDRAWAL.VIP_WITHDRAWAL_WHITELIST',
    name: 'Vip Withdrawal Whitelist',
    content: '/home/deposit-withdrawal/vip-withdrawal-whitelist',
    api: '',
    sortNum: 21,
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
