import {apis} from '../utils';

const permissions = [
  {
    permissionKey: 'REBATE_WEIGHT_SETTING',
    remark: 'Referral_Program',
    name: 'Rebate_Weight_Setting',
    resourceKeyList: [
      'REFERRAL_MANAGEMENT',
      'REFERRAL_MANAGEMENT.AGENT_GALAXY_LIST',
      'REFERRAL_MANAGEMENT.AGENT_GALAXY_LIST.REBATE_WEIGHT_SETTING',
    ],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
