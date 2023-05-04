import {apis} from '../../permission-init/utils';

const roles = ['BD_User', 'bd member'];

export async function handleLoadPermissions() {
  const accArr = [];
  const accAll = await apis.queryAccount();
  const accounts = accAll?.data?.rows || [];
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account?.roleInfoList?.some((r) => roles.indexOf(r.name) > -1)) {
      accArr.push(account);
    }
  }
  console.log(accArr);
}
