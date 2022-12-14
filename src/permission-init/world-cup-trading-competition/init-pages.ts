import {apis} from '../utils';

const parentKey = 'ACTIVITY';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'ACTIVITY.WORLD_CUP_TRADING_COMPETITION',
    name: 'World Cup Trading Competition',
    content: '/home/activity/world-cup-trading-competition',
    api: '',
    sortNum: 12,
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
