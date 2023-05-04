import {apis} from '../../permission-init/utils';

const parentKey = 'RISK_MANAGE.RISK_RULE';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_RULE.EDIT',
    name: 'Risk Rule Edit',
    content: '',
    api: '/risk-center-admin/engine/config/rule/save',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_RULE.APPROVAL',
    name: 'Risk Rule Approval',
    content: '',
    api: '/risk-center-admin/engine/config/rule/approval',
    sortNum: 2,
    isRoute: 2,
  },
];

export async function handleInitApiRule() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
