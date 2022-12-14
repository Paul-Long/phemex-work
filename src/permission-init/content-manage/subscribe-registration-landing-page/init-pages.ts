import {apis} from '../../utils';

const parentKey = 'CONTENT_MANAGE';

const resources = [
  {
    namespace: 1,
    type: 2,
    resourceKey: 'CONTENT_MANAGE.SUBSCRIBE_LANDING_PAGE',
    name: 'Subscribe Landing Page',
    content: '/home/content-management/subscribe-landing-page',
    api: '',
    sortNum: 22,
    isRoute: 1,
  },
  {
    namespace: 1,
    type: 2,
    resourceKey: 'CONTENT_MANAGE.EVENT_REGISTRATION_LANDING_PAGE',
    name: 'Event Registration Landing Page',
    content: '/home/content-management/event-registration-landing-page',
    api: '',
    sortNum: 23,
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
