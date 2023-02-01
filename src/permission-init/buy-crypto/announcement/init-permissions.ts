import {apis} from '../../utils';

const permissions = [
  {
    permissionKey: 'BUY_CRYPTO.BANNER_CONFIGURE',
    remark: 'Buy_Crypto',
    name: 'Banner_Configure',
    resourceKeyList: ['BUY_CRYPTO', 'BUY_CRYPTO.BANNER_CONFIGURE'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
