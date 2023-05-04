import {apis} from '../../permission-init/utils';

const parentKey = 'CONTENT_MANAGE';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'CONTENT_MANAGE.REGISTER_CONFIG',
    name: 'Register Config',
    content: '/home/content-management/register-config',
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
