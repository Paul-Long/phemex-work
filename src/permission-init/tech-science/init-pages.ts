import {apis} from '../utils';

const parentKey = 'TECH_DATA';

const resources = [
  {
    namespace: 3,
    type: 2,
    resourceKey: 'TECH_DATA.DATA_ATTR',
    name: 'attr',
    content: '/data/attr',
    api: '',
    sortNum: 2,
    isRoute: 1,
  },
  {
    namespace: 3,
    type: 2,
    resourceKey: 'TECH_DATA.DATA_APPLICATION',
    name: 'application',
    content: '/data/application',
    api: '',
    sortNum: 3,
    isRoute: 1,
  },
  {
    namespace: 3,
    type: 2,
    resourceKey: 'TECH_DATA.DATA_DATASOURCE',
    name: 'dataSource',
    content: '/data/dataSource',
    api: '',
    sortNum: 4,
    isRoute: 1,
  },
];

export async function handleInitPages() {
  const {data} = await apis.queryResource();
  const parent = data?.rows?.find((r) => r.resourceKey === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < resources.length; i++) {
    await apis.addResource({...resources[i], parentId: parent.id});
  }
}
