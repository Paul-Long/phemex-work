import {apis} from '../../permission-init/utils';

// const resourceKey = 'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST';
const resourceKey = 'THIRD_PARTY_MANAGEMENT.THIRD_PARTY_FIAT_DEPOSIT';

export async function handleLoadPermissions() {
  const perAll = await apis.queryPermission();
  const permissions = perAll?.data?.rows || [];
  const perArr = [];
  const roleArr = [];
  const accArr = [];
  for (let i = 0; i < permissions.length; i++) {
    const per = permissions[i];
    const resAll = await apis.loadResourceByPermission(per.permissionKey);
    resAll?.data?.rows?.forEach((r) => {
      if (r.resourceKey === resourceKey) {
        perArr.push(per.permissionKey);
      }
    });
  }

  console.log(perArr);
  if (perArr.length === 0) {
    return;
  }

  const roleAll = await apis.queryRole();
  const roles = roleAll?.data?.rows || [];
  for (let i = 0; i < roles.length; i++) {
    const role = roles[i];
    const res = await apis.getPermissionByRole(role.id);
    if (res?.data?.rows?.some((r) => perArr.indexOf(r.permissionKey) > -1)) {
      roleArr.push(role.name);
    }
  }

  console.log(roleArr);
  if (roleArr.length === 0) {
    return;
  }

  const accAll = await apis.queryAccount();
  const accounts = accAll?.data?.rows || [];
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account?.roleInfoList?.some((r) => roleArr.indexOf(r.name) > -1)) {
      accArr.push(account);
    }
  }
  console.log(accArr);
}
