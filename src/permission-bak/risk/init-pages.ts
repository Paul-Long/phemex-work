import {apis} from '../../permission-init/utils';

const parentResource = {
  namespace: 1,
  type: 1,
  resourceKey: 'RISK_MANAGE',
  name: 'Risk Management',
  content: '',
  api: '',
  sortNum: 10,
  isRoute: 1,
};

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'RISK_MANAGE.RISK_RULE',
    name: 'Risk Rule',
    content: '/home/risk-management/risk-rule',
    api: '',
    sortNum: 1,
    isRoute: 1,
  },
  {
    namespace: 1,
    type: 2,
    resourceKey: 'RISK_MANAGE.RISK_POLICY',
    name: 'Risk Policy',
    content: '/home/risk-management/risk-policy',
    api: '',
    sortNum: 2,
    isRoute: 1,
  },
  {
    namespace: 1,
    type: 2,
    resourceKey: 'RISK_MANAGE.RISK_CHECKPOINT',
    name: 'Risk Checkpoint',
    content: '/home/risk-management/risk-checkpoint',
    api: '',
    sortNum: 3,
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
