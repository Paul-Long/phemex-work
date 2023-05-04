import React from 'react';
import {Button, Form, Input} from 'antd';
import {useLogin} from './hooks';

export function Login() {
  const {handleSubmit} = useLogin();
  return (
    <Form onFinish={handleSubmit} wrapperCol={{span: 16}} labelCol={{span: 8}}>
      <Form.Item name="username" label="Email" rules={[{required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{required: true}]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="google2fa" label="Google2Fa" rules={[{required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{offset: 8}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
