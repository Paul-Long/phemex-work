import {apis} from '../../permission-init/utils';

export async function initPermission() {
  const accAll = await apis.queryAccount();
}
