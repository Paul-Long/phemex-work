import {apis} from '../../utils';

const parentKey = 'USER_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'USER_MANAGEMENT.API_IP_LIST',
    name: 'API IP List',
    content: '/home/user-manage/api-ip-list',
    api: '',
    sortNum: 22,
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
