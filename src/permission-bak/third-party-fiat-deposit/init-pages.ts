import {apis} from '../../permission-init/utils';

const resources = [
  {
    namespace: 1,
    type: 1,
    resourceKey: 'THIRD_PARTY_MANAGEMENT',
    name: 'Third Party Management',
    content: '',
    api: '',
    sortNum: 16,
    isRoute: 1,
    children: [
      {
        namespace: 1,
        type: 2,
        resourceKey: 'THIRD_PARTY_MANAGEMENT.THIRD_PARTY_FIAT_DEPOSIT',
        name: 'B2B2C History',
        content: '/home/third-party-management/third-party-fiat-deposit',
        api: '',
        sortNum: 1,
        isRoute: 1,
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
      const {...resource} = parentResource.children[j];
      await apis.addResource({...resource, parentId: parent.id});
    }
  }
}
