import {apis} from '../../../permission-init/utils';
const parentKey = 'USER_MANAGEMENT.USER_DETAIL';
const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'USER_MANAGEMENT.USER_DETAIL.CONTRACT_FEE_EDIT',
    name: 'Contract Fee Edit',
    content: '',
    api: '',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'USER_MANAGEMENT.USER_DETAIL.CONTRACT_FEE_RESET',
    name: 'Contract Fee Reset',
    content: '',
    api: '',
    sortNum: 2,
    isRoute: 2,
  },
];

export async function handleInitApis() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
