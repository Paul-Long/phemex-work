import {apis} from '../../utils';

const parentKey = 'BUY_CRYPTO';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'BUY_CRYPTO.OTC_HISTORY',
    name: 'OTC History',
    content: '/home/buy-crypto/otc-history',
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
