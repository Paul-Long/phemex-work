import {apis} from '../utils';

const parentKey = 'QUALITY';

const resources = [
  {
    namespace: 3,
    type: 2,
    resourceKey: 'QUALITY.ALARM_INDICATOR',
    name: 'alarmIndicator',
    content: '/quality/alarm-indicator',
    api: '',
    sortNum: 5,
    isRoute: 1,
  },
  {
    namespace: 3,
    type: 2,
    resourceKey: 'QUALITY.RULE_LIST',
    name: 'ruleList',
    content: '/quality/rule-list',
    api: '',
    sortNum: 6,
    isRoute: 1,
  },
  {
    namespace: 3,
    type: 2,
    resourceKey: 'QUALITY.CHART',
    name: 'chart',
    content: '/quality/chart',
    api: '',
    sortNum: 7,
    isRoute: 2,
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
