import {apis} from '../utils';

const parentKey = 'USER_MANAGEMENT.KYC_LIST';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'USER_MANAGEMENT.KYC_LIST.VERIFY',
    name: 'KYC Verify',
    content: '',
    // api: '/phemex-admin/admin/kyc/sync',
    api: '',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'USER_MANAGEMENT.KYC_LIST.UNVERIFY',
    name: 'KYC Unverify',
    content: '',
    //api: '/phemex-admin/admin/kyc/status',
    api: '',
    sortNum: 2,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'USER_MANAGEMENT.KYC_LIST.MODIFY',
    name: 'KYC Modify',
    content: '',
    // api: '/phemex-admin/admin/kyc/modify',
    api: '',
    sortNum: 3,
    isRoute: 2,
  },
];

export async function handleInitApiKyc() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
