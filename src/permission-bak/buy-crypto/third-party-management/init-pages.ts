import {apis} from '../../../permission-init/utils';

const parentKey = 'BUY_CRYPTO';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'BUY_CRYPTO.THIRD_PARTY_ORDERS',
    name: 'Third Party Orders',
    content: '/home/buy-crypto/third-party-orders',
    api: '',
    sortNum: 3,
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
