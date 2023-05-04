import React from 'react';
import {PageLayout} from '@/permission-init/components/PageLayout';
import {UploadFile} from '@/permission-init/tools/upload-file';

export function Tools() {
  return <PageLayout menus={menus} contents={contents} isElement />;
}

const menus = [
  {
    key: 'tools',
    label: 'Tools',
    children: [{key: 'upload_file', label: 'Upload File'}],
  },
];

const contents: any = {
  upload_file: <UploadFile />,
};
