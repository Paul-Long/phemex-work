import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'CROSS_MARGIN',
    remark: 'Margin_Trade_Configuration',
    name: 'Cross_Margin',
    resourceKeyList: ['MARGIN_TRADE_CONFIGURATION', 'MARGIN_TRADE_CONFIGURATION.CROSS_MARGIN'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
