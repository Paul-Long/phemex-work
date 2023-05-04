import {apis} from '../../permission-init/utils';

const parentKey = 'RISK_MANAGE.RISK_CHECKPOINT';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_CHECKPOINT.EDIT',
    name: 'Risk Checkpoint Edit',
    content: '',
    api: '/risk-center-admin/engine/config/checkpoint/save',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'RISK_MANAGE.RISK_CHECKPOINT.APPROVAL',
    name: 'Risk Checkpoint Approval',
    content: '',
    api: '/risk-center-admin/engine/config/checkpoint/approval',
    sortNum: 2,
    isRoute: 2,
  },
];

export async function handleInitApiCheckpoint() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
