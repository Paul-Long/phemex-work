import {apis} from '../utils';

export async function initPermission() {
  const accAll = await apis.queryAccount();
}
