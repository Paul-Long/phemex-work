import {apis} from '../utils';

const parentKey = 'DEPOSIT_WITHDRAWAL.DEPOSIT_SLIP_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.DEPOSIT_SLIP_MANAGEMENT.APPROVE',
    name: 'Approve',
    content: '',
    api: '',
    sortNum: 1,
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
