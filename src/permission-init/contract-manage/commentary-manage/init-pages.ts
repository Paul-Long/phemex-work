import {apis} from '../../utils';

const parentKey = 'CONTRACT_MANAGE';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'CONTRACT_MANAGE.TRADER_COMMENTARY',
    name: 'Copy Trader Commentary',
    content: '/home/contract-management/trader-commentary',
    api: '',
    sortNum: 26,
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
