import {apis} from '../../permission-init/utils';

const parentKey = 'BASE_CONFIGURATION';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'BASE_CONFIGURATION.SPOT_FEE_PROMOTION',
    name: 'Spot Fee Promotion',
    content: '/home/configuration/spot-fee-promotion',
    api: '',
    sortNum: 10,
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
