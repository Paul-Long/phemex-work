import {apis} from '../../../permission-init/utils';

const permissions = [
  {
    permissionKey: 'SUBSCRIBE_LANDING_PAGE',
    remark: 'ContentManagement',
    name: 'Subscribe Landing Page',
    resourceKeyList: ['CONTENT_MANAGE', 'CONTENT_MANAGE.SUBSCRIBE_LANDING_PAGE'],
  },
  {
    permissionKey: 'EVENT_REGISTRATION_LANDING_PAGE',
    remark: 'ContentManagement',
    name: 'Event Registration Landing Page',
    resourceKeyList: ['CONTENT_MANAGE', 'CONTENT_MANAGE.EVENT_REGISTRATION_LANDING_PAGE'],
  },
];

export async function handleInitPermissions() {
  for (let i = 0; i < permissions.length; i++) {
    await apis.addPermission(permissions[i]);
  }
}
