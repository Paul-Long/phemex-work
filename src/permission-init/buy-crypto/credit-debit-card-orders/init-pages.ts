import {apis} from '../../utils';

const parentKey = 'BUY_CRYPTO';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'BUY_CRYPTO.CREDIT_DEBIT_CARD_ORDERS',
    name: 'Credit/Debit Card Orders',
    content: '/home/buy-crypto/credit-debit-card-orders',
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
