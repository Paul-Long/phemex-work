import React from 'react';
import {Button, Form, Input, Space, Table} from 'antd';
import {useForm} from './check-resource';

export function CheckResource() {
  const {formRef, loading, record, handleFinish} = useForm();
  return (
    <>
      <Form ref={formRef} onFinish={handleFinish} layout="horizontal">
        <Space align="center">
          <Form.Item label="Resource Key" name="resource">
            <Input style={{width: 500}} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" loading={loading} type="primary">
              Submit
            </Button>
          </Form.Item>
        </Space>
      </Form>
      <Table
        bordered
        pagination={false}
        size="small"
        scroll={{x: 'max-content'}}
        columns={columns}
        dataSource={!formRef?.current?.getFieldsValue()?.resource ? [] : [record]}
      />
    </>
  );
}

const columns = [
  {
    title: 'Permissions',
    dataIndex: 'perArr',
    render(items) {
      return items?.map((item) => (
        <span style={{display: 'block'}} key={item}>
          {item}
        </span>
      ));
    },
  },
  {
    title: 'Roles',
    dataIndex: 'roleArr',
    render(items) {
      return items?.map((item) => (
        <span style={{display: 'block'}} key={item}>
          {item}
        </span>
      ));
    },
  },
  {
    title: 'Users',
    dataIndex: 'accArr',
    render(items): any {
      return items?.map(({email}) => (
        <span style={{display: 'block'}} key={email}>
          {email}
        </span>
      ));
    },
  },
];
