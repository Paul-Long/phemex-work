import {apis} from '../../../permission-init/utils';

const resources = [
  {
    namespace: 1,
    type: 1,
    resourceKey: 'MARGIN_TRADE_CONFIGURATION',
    name: 'Margin Configuration',
    content: '',
    api: '',
    sortNum: 17,
    isRoute: 1,
    children: [
      {
        namespace: 1,
        type: 2,
        resourceKey: 'MARGIN_TRADE_CONFIGURATION.CROSS_MARGIN',
        name: 'Cross Margin',
        content: '/home/margin-trade-configuration/cross-margin',
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
