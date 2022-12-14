import {apis} from '../utils';

const resources = [
  {
    namespace: 1,
    type: 1,
    resourceKey: 'OFFICIAL_VERIFY.MANAGEMENT',
    name: 'Official Verify management',
    content: '/home/official-verify-management',
    api: '',
    sortNum: 14,
    isRoute: 1,
  },
];

export async function handleInitPages() {
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i]});
  }
}
