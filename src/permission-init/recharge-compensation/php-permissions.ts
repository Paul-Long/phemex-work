import {apis} from '../utils';

const csKey = '补偿入金-CS';
const techKey = '补偿入金-Tech';
const opKey = '补偿入金-资管';

export async function phpPermissions() {
  const accRes = await apis.queryAccount();
  const users = accRes?.data?.rows || [];
  const userMap = {
    cs: [],
    tech: [],
    op: [],
  };
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const {data} = await apis.phpPermissions(user.email);
    data?.data?.permissions?.forEach((p) => {
      if (p.key === csKey) {
        userMap.cs.push(user);
      }
      if (p.key === techKey) {
        userMap.tech.push(user);
      }
      if (p.key === opKey) {
        userMap.op.push(user);
      }
    });
  }
  console.log(userMap);
}
