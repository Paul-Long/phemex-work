import {genColumns, useProModal} from 'phemex-admin-utils';
import React, {useRef} from 'react';
import ProTable, {ActionType} from '@ant-design/pro-table';
import {Button, Space} from '@/common/widgets';
import {Api} from '@/template-dir/api';
import {columns} from '@/template-dir/const';
import {EditModal} from './EditModal';
import {useAction} from './hooks';

export default function () {
  const actionRef = useRef<ActionType>();
  const modalHook = useProModal();
  const action = useAction({modalHook});
  const newColumns = genColumns(columns, renderColumns(action));
  return (
    <>
      <ProTable
        bordered
        columns={newColumns}
        actionRef={actionRef}
        request={Api.getList}
        scroll={{x: 'max-content'}}
        toolBarRender={toolBarRenderFun()}
      />
      <EditModal modalHook={modalHook} />
    </>
  );
}

function toolBarRenderFun() {
  return function () {
    return [
      <Space key="add">
        <Button type="primary">Add</Button>
      </Space>,
    ];
  };
}

function renderColumns(action) {
  return {
    action(_, record) {
      return (
        <Space>
          <Button type="primary" onClick={action.handleEditFun(record)}>
            Edit
          </Button>
          <Button type="default" danger onClick={action.handleDeleteFun(record)}>
            Delete
          </Button>
        </Space>
      );
    },
  };
}
