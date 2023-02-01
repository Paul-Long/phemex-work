import React from 'react';
import {Button, Space} from 'antd'
import {handleInitPages, handleInitPermissions, handleInitRoles} from './hooks'

interface PermissionWrapProps {
  page: BaseProps,
  role: BaseProps,
  resources: Record<string, any>[]
  permissions: Record<string, any>[]
  roles: Record<string, any>[]
}

interface BaseProps{
  parent?: Record<string, any>,
  parentKey?: string;
}

export function Init(props: PermissionWrapProps) {
  const {resources, permissions, roles, page, role} = props;
  return (
    <Space>
      {resources.length > 0 && <Button type="primary" onClick={handleInitPages(resources, page.parentKey)}>Init Pages</Button>}
      {permissions.length > 0 && <Button type="primary" onClick={handleInitPermissions(permissions)}>Init Permissions</Button>}
      {roles.length > 0 && <Button type="primary" onClick={handleInitRoles(roles, role.parentKey)}>Init Roles</Button>}
    </Space>
  )
}
