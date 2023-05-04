import {apis} from '../../permission-init/utils';

const parentResource = {
  namespace: 3,
  type: 1,
  resourceKey: 'Gray',
  name: 'gray',
  content: '',
  api: '',
  sortNum: 2,
  isRoute: 1,
};

const resources = [
  {
    namespace: 3,
    type: 2,
    resourceKey: 'Gray_Management',
    name: 'management',
    content: '/gray/management',
    api: '',
    sortNum: 1,
    isRoute: 1,
  },
];

export async function handleInitPages() {
  await apis.addResource(parentResource);
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentResource.resourceKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
