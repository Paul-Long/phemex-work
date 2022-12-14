import {apis} from '../../utils';

const parentKey = 'ContentManagement';

const roles = [
  {
    name: 'Subscribe Landing Page',
    remark: 'ContentManagement',
    permission: ['SUBSCRIBE_LANDING_PAGE'],
  },
  {
    name: 'Event Registration Landing Page',
    remark: 'ContentManagement',
    permission: ['EVENT_REGISTRATION_LANDING_PAGE'],
  },
];

export async function handleInitRoles() {
  const {data} = await apis.queryRole();
  const parent = data?.rows?.find((r) => r.name === parentKey);
  if (!parent) {
    return;
  }
  for (let i = 0; i < roles.length; i++) {
    await apis.addRole({...roles[i], parentId: parent.id});
  }
}
