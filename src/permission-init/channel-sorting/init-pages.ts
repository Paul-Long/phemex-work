import {apis} from '../utils';

const parentKey = 'FIAT_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'FIAT_MANAGEMENT.CHANNEL_SORTING',
    name: 'Channel Sorting Management',
    content: '/home/fiat-management/channel-sorting',
    api: '',
    sortNum: 2,
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
