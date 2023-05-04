import React from 'react';
import {CheckResource} from '@/permission-init/check-permission/check-resource';
import {UpdateRole} from '@/permission-init/check-permission/update-role';
import {PageLayout} from '@/permission-init/components/PageLayout';

export function CheckPermission() {
  return <PageLayout menus={menus} contents={contents} isElement />;
}

const menus = [
  {
    key: 'permission',
    label: 'Permission',
    children: [
      {key: 'check_resource', label: 'Check Permission'},
      {key: 'update_role', label: 'Update Role'},
    ],
  },
];

const contents: any = {
  check_resource: <CheckResource />,
  update_role: <UpdateRole />,
};
