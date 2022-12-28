import {apis} from '../../utils';

const parentKey = 'BUY_CRYPTO';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'BUY_CRYPTO.USER_BLACKLIST',
    name: 'User Blacklist',
    content: '/home/buy-crypto/user-blacklist',
    api: '',
    sortNum: 4,
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
