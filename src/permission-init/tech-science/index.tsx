import React from 'react';
import {PageLayout} from '@/permission-init/components/PageLayout';
import {syncData} from './sync-data';

export function TechScience() {
  return <PageLayout menus={menus} contents={contents} />;
}

const menus = [
  {
    key: 'sync-data',
    label: 'Sync Data',
    children: [
      {key: 'dbs', label: 'DBS'},
      {key: 'instance_task_mapping', label: 'Instance Task Mapping'},
      {key: 'streamx_tasks', label: 'Streamx Tasks'},
      {key: 'sync_tasks', label: 'Sync Tasks'},
      {key: 'sync_tasks_checked', label: 'Sync Tasks Checked'},
    ],
  },
];
const contents: any = {
  ...syncData,
};
