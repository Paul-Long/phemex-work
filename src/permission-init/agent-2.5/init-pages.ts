import {apis} from '../utils';

const parentKey = 'REFERRAL_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'REFERRAL_MANAGEMENT.AGENT_GALAXY_LIST.REBATE_WEIGHT_SETTING',
    name: 'Rebate Weight Setting',
    content: '',
    api: '',
    sortNum: 1,
    isRoute: 0,
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
