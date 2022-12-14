import React from 'react';
import {ModalForm, ProFormText} from '@ant-design/pro-form';
import {ModalProps, useModalForm} from './hooks';

export function EditModal(props: ModalProps) {
  const {modalHook} = props;
  const {visible, rowData, onVisibleChange} = modalHook;
  const {formRef, loading, handleFinish} = useModalForm(props);
  return (
    <ModalForm
      title="Title"
      width={600}
      formRef={formRef}
      visible={visible}
      layout="horizontal"
      labelCol={{span: 6}}
      wrapperCol={{span: 16}}
      onFinish={handleFinish}
      initialValues={rowData}
      onVisibleChange={onVisibleChange}
      modalProps={{destroyOnClose: true, confirmLoading: loading, maskClosable: true}}
    >
      <ProFormText name="userId" label="UID" />
    </ModalForm>
  );
}
