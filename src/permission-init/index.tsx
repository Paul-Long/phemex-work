import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {Layout, Button, Drawer} from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import {Login} from './login/Login';

export function InitPermission() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/admin');
    }
  }, []);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Layout style={{width: '100%', height: '100%'}}>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          padding: 0,
          height: 40,
          lineHeight: '38px',
          borderBottom: '1px solid #e8e8e8',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            width: '100%',
          }}
        >
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {links.map((link) => (
              <Link
                to={link.to}
                relative="path"
                style={{
                  textAlign: 'center',
                  padding: '0 10px',
                  color: location.pathname === link.to ? '#1890ff' : 'black',
                  borderBottom: location.pathname === link.to ? '2px solid #1890ff' : 'none',
                }}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <Button type="primary" shape="circle" onClick={showDrawer} icon={<LoginOutlined />} />
          <Drawer title="Login" placement="right" onClose={onClose} open={open}>
            <Login />
          </Drawer>
        </div>
      </Layout.Header>
      <Layout.Content style={{padding: 6}}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}

const links = [
  {to: '/admin', text: 'Phemex Admin'},
  {to: '/tech-science', text: 'Tech Science'},
  {to: '/check-permission', text: 'Check Permission'},
  {to: '/tools', text: 'Tools'},
];
