import axios from 'axios';
import {message} from 'antd';

const url = {
  login: '/phemex-admin/phemex-entitlement/login',
  queryAccount: '/phemex-admin/phemex-entitlement/admin/user/list',
  queryRole: '/phemex-admin/phemex-entitlement/admin/role/list',
  queryPermission: '/phemex-admin/phemex-entitlement/admin/permission/listByKeyWord',
  addResource: '/phemex-admin/phemex-entitlement/admin/resource/add',
  addPermission: '/phemex-admin/phemex-entitlement/admin/permission/add',
  addRole: '/phemex-admin/phemex-entitlement/admin/role/add',
  queryResource: '/phemex-admin/phemex-entitlement/admin/resource/list',
  phpPermissions: '/phemex-admin/root/x_admin/account-detail',
  savePhpPermissions: '/phemex-admin/root/x_admin/account-save',
  loadResourceByPermission: '/phemex-admin/phemex-entitlement/admin/permission/listPermissionSpecs',
  getPermissionByRole: '/phemex-admin/phemex-entitlement/admin/permission/getPermissionByRole',
  updateFile: '/phemex-admin/phemex-admin/admin/upload/image',
  userEdit: '/phemex-admin/phemex-entitlement/admin/user/edit'
};

export const apis = {
  login,
  queryAccount,
  queryRole,
  queryPermission,
  addResource,
  addPermission,
  addRole,
  queryResource,
  phpPermissions,
  loadResourceByPermission,
  getPermissionByRole,
  savePhpPermissions,
  uploadFile,
  userEdit
};

async function login(params) {
  const res = await request(url.login, {
    method: 'POST',
    body: params,
  });
  const {data, code} = res;
  const state = {token: data.token, userId: data.adminId, isLogin: true, userName: data.username};
  localStorage.setItem('phemex-admin', JSON.stringify(state));
  return res
}

async function queryAccount() {
  return await request(url.queryAccount, {method: 'POST', body: {pageNum: 1, pageSize: 230}});
}

async function queryRole() {
  return await request(url.queryRole);
}

async function queryPermission() {
  return await request(url.queryPermission, {method: 'POST', body: {pageNum: 1, pageSize: 200}});
}

async function addRole(body) {
  const res = await request(url.addRole, {method: 'POST', body});
  if (res?.data) {
    message.success('Add role success');
  }
  return res;
}

async function userEdit(body) {
  const res = await request(url.userEdit, {method: 'POST', body});
  if (res?.data) {
    message.success('User edit success');
  }
  return res;
}

async function addResource(body) {
  const res = await request(url.addResource, {method: 'POST', body});
  if (res?.data) {
    message.success('Add resource success');
  }
  return res;
}

async function addPermission(body) {
  const res = await request(url.addPermission, {method: 'POST', body});
  if (res?.data) {
    message.success('Add permission success');
  }
  return res;
}

async function queryResource() {
  return await request(url.queryResource);
}

async function phpPermissions(email) {
  return await request(`${url.phpPermissions}?email=${email}`);
}

async function savePhpPermissions(body) {
  return await request(url.savePhpPermissions, {method: 'POST', body});
}

async function loadResourceByPermission(permission) {
  return await request(`${url.loadResourceByPermission}?permissionKey=${permission}`);
}

async function getPermissionByRole(roleId) {
  return await request(url.getPermissionByRole + `?roleId=${roleId}`);
}

async function uploadFile(options) {
  return await request(url.updateFile, {method: 'POST',...options})
}


async function request(url, options: any = {}) {
  const {method = 'GET', body = {}, headers = {}} = options;
  const token = localStorage.getItem('token');
  const init: any = {
    headers: {
      'phemex-admin-token': token,
      'admin-namespace': '1',
      'content-type': 'application/json',
      ...headers
    },
    method,
  };
  if (method !== 'GET') {
    init.data = body;
  }
  return await axios(url, init).then((res) => {
    const token = res.headers['phemex-admin-token'];
    if (token) {
      localStorage.setItem('token', token);
    }
    return res.data;
  });
}
