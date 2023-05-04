import {apis} from '../../../permission-init/utils';

const parentKey = 'USER_MANAGEMENT';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'USER_MANAGEMENT.LIMIT_MANAGEMENT',
    name: 'Limit Management',
    content: '/home/user-manage/limit-management',
    api: '',
    sortNum: 21,
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
