import {accounts} from './data';
import {apis} from '../utils';

const permissionKey = '推荐计划管理';

export async function handleInitAgentAudit() {
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const res = await apis.phpPermissions(account.email);
    const {roles = [], permissions = []} = res?.data?.data || {};
    if (roles.some((r) => r.id == 1)) {
      continue;
    }
    if (permissions.some((p) => p.key === permissionKey)) {
      continue;
    }
    const user = {
      roles: roles.map((r) => r.id),
      permissions: [...permissions.map((p) => p.key), permissionKey],
      email: account.email,
      admin_username: account.username,
      mobile: account.mobile,
      id: account.id,
    };
    await apis.savePhpPermissions(user);
  }
}
