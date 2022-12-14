import type {IProModalType} from 'phemex-admin-utils';
import {useCallback, useRef} from 'react';
import type {ProFormInstance} from '@ant-design/pro-form';
import {useLoadingHook} from '@/common/hooks';
import {message, Modal} from '@/common/widgets';
import {Api} from '@/template-dir/api';

export interface ModalProps<T = any> {
  modalHook: IProModalType<T>;
}

export function useModalForm(props: ModalProps) {
  const formRef = useRef<ProFormInstance>();
  const {rowData, closeModalAndReload} = props.modalHook;

  const [loading, handleFinish] = useLoadingHook(
    async (values) => {
      const isEdited = !!rowData.id;
      const request = isEdited ? Api.update : Api.add;
      const {data} = await request(values);
      if (data) {
        message.success(`${isEdited ? 'Edit' : 'Add'} success`);
        closeModalAndReload();
      }
    },
    [rowData]
  );

  return {formRef, loading, handleFinish};
}

export function useAction(props: ModalProps) {
  const {openModalFun, closeModalAndReload} = props.modalHook;

  const handleEditFun = useCallback((record) => {
    return function () {
      openModalFun(record);
    };
  }, []);

  const handleDeleteFun = useCallback((record) => {
    return function () {
      Modal.confirm({
        title: 'Delete',
        content: 'Confirm delete item?',
        onOk: async () => {
          const {data} = await Api.delete({id: record.id});
          if (data) {
            message.success('Delete success');
            closeModalAndReload();
          }
        },
      });
    };
  }, []);

  return {handleEditFun, handleDeleteFun};
}
