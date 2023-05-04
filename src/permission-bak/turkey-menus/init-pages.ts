import {apis} from '../../permission-init/utils';

const resources = [
  {
    namespace: 2,
    type: 1,
    resourceKey: 'TR.USER_MANAGEMENT',
    name: 'User Management',
    content: '',
    api: '',
    sortNum: 1,
    isRoute: 1,
    children: [
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.USER_MANAGEMENT.USER_LIST',
        name: 'User List',
        content: '/home/user/list',
        api: '',
        sortNum: 1,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.USER_MANAGEMENT.USER_DETAIL',
        name: 'User List',
        content: '/home/user/detail',
        api: '',
        sortNum: 2,
        isRoute: 2,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.USER_MANAGEMENT.PERSONAL_KYC',
        name: 'Personal KYC',
        content: '/home/user/personal-kyc',
        api: '',
        sortNum: 3,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.USER_MANAGEMENT.REFERRAL_PROGRAM',
        name: 'Referral program',
        content: '/home/user/referral-program',
        api: '',
        sortNum: 4,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.USER_MANAGEMENT.REFERRAL_PROGRAM_DETAIL',
        name: 'Referral program detail',
        content: '/home/user/referral-program/detail',
        api: '',
        sortNum: 5,
        isRoute: 2,
      },
    ],
  },
  {
    namespace: 2,
    type: 1,
    resourceKey: 'TR.ASSETS_MANAGEMENT',
    name: 'Assets Management',
    content: '',
    api: '',
    sortNum: 2,
    isRoute: 1,
    children: [
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.ASSETS_MANAGEMENT.WITHDRAWAL_REQUEST',
        name: 'Withdrawal request',
        content: '/home/asset/withdrawal-request',
        api: '',
        sortNum: 1,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.ASSETS_MANAGEMENT.WITHDRAWAL_HOT_WALLET',
        name: 'Withdrawal hot wallet',
        content: '/home/asset/withdrawal-hot-wallet',
        api: '',
        sortNum: 2,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.ASSETS_MANAGEMENT.DEPOSIT_SLIP_MANAGEMENT',
        name: 'Deposit Slip Management',
        content: '/home/asset/deposit-slip-management',
        api: '',
        sortNum: 3,
        isRoute: 1,
        children: [
          {
            namespace: 2,
            type: 3,
            resourceKey: 'TR.ASSETS_MANAGEMENT.DEPOSIT_SLIP_MANAGEMENT.APPROVE',
            name: 'Approve',
            content: '',
            api: '',
            sortNum: 1,
            isRoute: 2,
          },
        ],
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.ASSETS_MANAGEMENT.AML_BLACK_LIST',
        name: 'AML Black List',
        content: '/home/asset/aml-black-list',
        api: '',
        sortNum: 4,
        isRoute: 1,
      },
    ],
  },
  {
    namespace: 2,
    type: 1,
    resourceKey: 'TR.OPERATION_ACTIVITY',
    name: 'Operation Activity',
    content: '',
    api: '',
    sortNum: 3,
    isRoute: 1,
    children: [
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.OPERATION_ACTIVITY.TR_DEPOSIT_PROMOTION',
        name: 'TR Deposit Promotion',
        content: '/home/operation-activity/deposit-promotion',
        api: '',
        sortNum: 1,
        isRoute: 1,
      },
    ],
  },
  {
    namespace: 2,
    type: 1,
    resourceKey: 'TR.OPERATION_MANAGEMENT',
    name: 'Operation Management',
    content: '',
    api: '',
    sortNum: 4,
    isRoute: 1,
    children: [
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.OPERATION_MANAGEMENT.APP_EDITION_MANAGEMENT',
        name: 'App edition management',
        content: '/home/operation-management/app-version',
        api: '',
        sortNum: 1,
        isRoute: 1,
      },
    ],
  },
  {
    namespace: 2,
    type: 1,
    resourceKey: 'TR.CONTENT_MANAGEMENT',
    name: 'Content Management',
    content: '',
    api: '',
    sortNum: 5,
    isRoute: 1,
    children: [
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT',
        name: 'Email management',
        content: '/home/content-management/param-operation-email/list',
        api: '',
        sortNum: 1,
        isRoute: 1,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT_CREATE',
        name: 'Email management create',
        content: '/home/content-management/param-operation-email/create',
        api: '',
        sortNum: 2,
        isRoute: 2,
      },
      {
        namespace: 2,
        type: 2,
        resourceKey: 'TR.CONTENT_MANAGEMENT.EMAIL_MANAGEMENT_RECORD',
        name: 'Email management record',
        content: '/home/content-management/param-operation-email/record',
        api: '',
        sortNum: 2,
        isRoute: 2,
      },
    ],
  },
];

export async function handleInitPages() {
  for (let i = 0; i < resources.length; i++) {
    const parentResource = resources[i];
    await apis.addResource(parentResource);
    const {data} = await apis.queryResource();
    const parent = data?.rows?.find((r) => r.resourceKey === parentResource.resourceKey);
    if (!parent) {
      continue;
    }
    for (let j = 0; j < parentResource.children.length; j++) {
      const {children, ...resource} = parentResource.children[j];
      await apis.addResource({...resource, parentId: parent.id});
      if (!children) {
        continue;
      }
      const {data: d} = await apis.queryResource();
      const p = d?.rows?.find((r) => r.resourceKey === resource.resourceKey);
      if (!p) {
        continue;
      }
      for (let k = 0; k < children.length; k++) {
        await apis.addResource({...children[k], parentId: p.id});
      }
    }
  }
}
