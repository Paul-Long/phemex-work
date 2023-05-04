import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Form, Input, Button, Select, message, Radio, Table, FormInstance} from 'antd';
import {apis} from '@/permission-init/utils';

export function UpdateRole() {
  const {formRef, loading, handleFinish, handleChangeValue, roles, dataSource} = useAction();
  return (
    <>
      <Form
        ref={formRef}
        onFinish={handleFinish}
        onValuesChange={handleChangeValue}
        wrapperCol={{span: 16}}
        labelCol={{span: 6}}
        initialValues={{type: 'push'}}
      >
        <Form.Item label="Users" name="users" required>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label="Role" name="role" required>
          <Select options={roles} showSearch />
        </Form.Item>
        <Form.Item label="Type" name="type" required>
          <Radio.Group
            options={[
              {label: 'Push', value: 'push'},
              {label: 'Remove', value: 'remove'},
            ]}
          />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 6}}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table
        bordered
        pagination={false}
        size="small"
        scroll={{x: 'max-content'}}
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
}

function useAction() {
  const formRef = useRef<FormInstance>();
  const [loading, setLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<any>([]);
  const [roleMap, setRoleMap] = useState<any>({});
  const [accounts, setAccounts] = useState<any>([]);
  const [dataSource, setDataSource] = useState<any>([]);

  const loadData = useCallback(async () => {
    const {data} = await apis.queryRole();
    setRoleMap(data?.rows?.reduce((m, r) => ({...m, [r.id]: `[${r.id}] ${r.name}`}), {}));
    setRoles(data?.rows?.map((r) => ({label: `[${r.id}] ${r.name}`, value: r.id})));
    const accRes = await apis.queryAccount();
    setAccounts(accRes?.data?.rows || []);
    const values = formRef?.current?.getFieldsValue();
    if (values.users) {
      const acc = genAccounts(accRes?.data?.rows || [], values.users, roleMap);
      setDataSource(acc);
    }
  }, [roleMap]);

  const handleChangeValue = useCallback(
    (_, values) => {
      const acc = genAccounts(accounts, values.users, roleMap);
      setDataSource(acc);
    },
    [roleMap, accounts]
  );

  const handleFinish = useCallback(
    async (values) => {
      setLoading(true);
      const users = values.users.split(',');
      if (users.length < 1) {
        message.error('Users is Require');
        return;
      }
      const acc = accounts
        .filter((a) => users.includes(a.email))
        .map((a) => {
          const roles = a.roleInfoList?.map((r) => r.id).filter((id) => id !== values.role);
          if (values.type === 'push') {
            roles.push(values.role);
          }
          return {id: a.id, roles};
        });
      for (let u of acc) {
        await apis.userEdit(u);
      }
      await loadData();
      setLoading(false);
    },
    [accounts]
  );

  useEffect(() => {
    loadData();
  }, []);

  return {formRef, loading, handleFinish, handleChangeValue, roles, dataSource};
}

function genAccounts(accounts, users, roleMap) {
  const userList = users.split(',');
  return accounts
    .filter((a) => userList.includes(a.email))
    .map((a) => {
      const ids = [...a.roleInfoList].map((r) => r.id);
      ids.sort((a, b) => (a > b ? 1 : -1));
      const roles = ids?.map((id) => roleMap[id]);
      return {id: a.id, email: a.email, roles};
    });
}

const columns = [
  {title: 'UserID', dataIndex: 'id'},
  {title: 'Email', dataIndex: 'email'},
  {
    title: 'Roles',
    dataIndex: 'roles',
    render: (roles) => (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {roles.map((r) => (
          <span>{r}</span>
        ))}
      </div>
    ),
  },
];
