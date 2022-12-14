import {apis} from '../utils';

const parentKey = 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST';

const resources = [
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.ADD',
    name: 'Recharge Compensation Add',
    api: '/phemex-admin/admin/deposits/compensate/deposit/add',
    sortNum: 1,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.CHECK',
    name: 'Recharge Compensation Check',
    api: '/phemex-admin/admin/deposits/compensate/deposit/validate/transaction',
    sortNum: 2,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.APPLY',
    name: 'Recharge Compensation Apply',
    api: '/phemex-admin/admin/deposits/compensate/deposit/apply',
    sortNum: 3,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.DELETE',
    name: 'Recharge Compensation Delete',
    api: '/phemex-admin/admin/deposits/compensate/deposit/delete',
    sortNum: 4,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.CHECK_APPROVE',
    name: 'Recharge Compensation Check Approve',
    api: '/phemex-admin/admin/deposits/compensate/deposit/check/approve',
    sortNum: 5,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.CHECK_REJECT',
    name: 'Recharge Compensation Check Reject',
    api: '/phemex-admin/admin/deposits/compensate/deposit/check/reject',
    sortNum: 6,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.APPROVE',
    name: 'Recharge Compensation Approve',
    api: '/phemex-admin/admin/deposits/compensate/deposit/approve',
    sortNum: 7,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.REJECT',
    name: 'Recharge Compensation Reject',
    api: '/phemex-admin/admin/deposits/compensate/deposit/reject',
    sortNum: 8,
    isRoute: 2,
  },
  {
    namespace: 1,
    type: 3,
    resourceKey: 'DEPOSIT_WITHDRAWAL.RECHARGE_COMPENSATION_LIST.LIST',
    name: 'Recharge Compensation List',
    api: '/phemex-admin/admin/deposits/compensate/deposit/apply/list',
    sortNum: 9,
    isRoute: 2,
  },
];

export async function handleInitApiResource() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
