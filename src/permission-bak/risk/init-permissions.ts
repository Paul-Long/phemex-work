import {apis} from '../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'Risk_Manage_Admin',
    remark: 'Risk Manage',
    name: 'Risk Manage Admin',
    resourceKeyList: [
      'RISK_MANAGE',
      'RISK_MANAGE.RISK_RULE',
      'RISK_MANAGE.RISK_RULE.EDIT',
      'RISK_MANAGE.RISK_RULE.APPROVAL',
      'RISK_MANAGE.RISK_POLICY',
      'RISK_MANAGE.RISK_POLICY.EDIT',
      'RISK_MANAGE.RISK_POLICY.APPROVAL',
      'RISK_MANAGE.RISK_CHECKPOINT',
      'RISK_MANAGE.RISK_CHECKPOINT.EDIT',
      'RISK_MANAGE.RISK_CHECKPOINT.APPROVAL',
    ],
  },
  {
    permissionKey: 'Risk_Manage_Edit',
    remark: 'Risk Manage',
    name: 'Risk Manage Edit',
    resourceKeyList: [
      'RISK_MANAGE',
      'RISK_MANAGE.RISK_RULE',
      'RISK_MANAGE.RISK_RULE.EDIT',
      'RISK_MANAGE.RISK_POLICY',
      'RISK_MANAGE.RISK_POLICY.EDIT',
      'RISK_MANAGE.RISK_CHECKPOINT',
      'RISK_MANAGE.RISK_CHECKPOINT.EDIT',
    ],
  },
  {
    permissionKey: 'Risk_Manage_View',
    remark: 'Risk Manage',
    name: 'Risk Manage View',
    resourceKeyList: ['RISK_MANAGE', 'RISK_MANAGE.RISK_RULE', 'RISK_MANAGE.RISK_POLICY', 'RISK_MANAGE.RISK_CHECKPOINT'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
