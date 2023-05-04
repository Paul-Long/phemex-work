import _ from 'lodash';
import React, {useState} from 'react';
import {Layout, Menu, Divider} from 'antd';
import {MenuItemType} from 'antd/es/menu/hooks/useItems';
import {Init} from '@/permission-init/components';

interface PageLayoutProps {
  menus: MenuItemType[];
  contents: Record<string, any>;
  isElement?: boolean;
}

export function PageLayout(props: PageLayoutProps) {
  const {menus, contents, isElement} = props;
  const [menu, setMenu] = useState<string>();
  return (
    <Layout style={{width: '100%', height: '100%'}}>
      <Layout.Sider width={300} theme="light">
        <Menu
          mode="inline"
          defaultOpenKeys={menus.map((m) => m.key) as any[]}
          items={menus}
          onClick={({key}) => setMenu(key)}
          style={{width: 300}}
        />
      </Layout.Sider>
      <Layout.Content style={{padding: '0 0 0 6px'}}>
        <div
          style={{width: '100%', height: '100%', padding: 10, borderRadius: 4, overflow: 'auto', background: 'white'}}
        >
          {!!menu && <h2>{_.startCase(menu)}</h2>}
          {!!menu && <Divider />}
          {!!menu && !isElement && <Init {...contents[menu]} />}
          {isElement && contents[menu]}
        </div>
      </Layout.Content>
    </Layout>
  );
}
