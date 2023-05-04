import {apis} from '../../permission-init/utils';

const parentKey = 'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST';

const resources = [
  {
    namespace: 2,
    type: 3,
    resourceKey: 'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST.APPROVE',
    name: 'Approve',
    content: '',
    api: '',
    sortNum: 1,
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
