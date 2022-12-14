import {apis} from '../utils';

const parentKey = 'P2P_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'P2P_MANAGEMENT.MAKER_EVALUATE_CONFIGURE',
    name: 'Maker Evaluate Date Configure',
    content: '/home/p2p-management/maker-evaluate-configure',
    api: '',
    sortNum: 7,
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
