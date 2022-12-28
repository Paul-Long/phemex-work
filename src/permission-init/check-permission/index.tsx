import React from 'react';
import {Button, Row, Form, Input, Table, Space, Divider} from 'antd';
import {useForm} from './check-resource';

export function CheckPermission() {
  const {loading, record, handleFinish} = useForm();

  return (
    <>
      <Divider plain orientation="left">
        Check Permission
      </Divider>
      <Form onFinish={handleFinish} layout="horizontal">
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
      <Table bordered columns={columns} dataSource={[record]} />
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
