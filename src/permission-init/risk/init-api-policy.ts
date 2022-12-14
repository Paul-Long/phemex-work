import {apis} from '../utils';

const parentKey = 'RISK_MANAGE.RISK_POLICY';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_POLICY.EDIT',
    name: 'Risk Policy Edit',
    content: '',
    api: '/risk-center-admin/engine/config/policy/save',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_POLICY.APPROVAL',
    name: 'Risk Policy Approval',
    content: '',
    api: '/risk-center-admin/engine/config/policy/approval',
    sortNum: 2,
    isRoute: 2,
  },
];

export async function handleInitApiPolicy() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
