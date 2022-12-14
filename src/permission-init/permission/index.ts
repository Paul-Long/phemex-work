import {apis} from '../utils';

export async function handleInitPermission() {
  const accRes = await apis.queryAccount();
  const users = accRes?.data?.rows || [];
  const roleRes = await apis.queryRole();
  const roles = roleRes?.data?.rows || [];

  const roleUserMap: any = {};
  users.forEach((user: any) => {
    (user?.roleInfoList || []).forEach((role: any) => {
      if (!roleUserMap[role.id]) {
        roleUserMap[role.id] = [];
      }
      roleUserMap[role.id].push(user);
    });
  });
  const delRoles = roles.filter((role) => {
    return !users.some((user) => {
      return (user?.roleInfoList || []).some((r) => r.id === role.id);
    });
  });
  console.log(delRoles);
  console.log(roleUserMap);
}
