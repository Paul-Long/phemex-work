import {apis} from '../../permission-init/utils';

const resources = [
  {
    namespace: 1,
    type: 1,
    resourceKey: 'BUY_CRYPTO',
    name: 'Buy Crypto',
    content: '',
    api: '',
    sortNum: 17,
    isRoute: 1,
  },
];

export async function handleInitPages() {
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i]});
  }
}
