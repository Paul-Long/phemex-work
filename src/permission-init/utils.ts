import axios from 'axios';

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
};

async function login(params) {
  const {data} = await request(url.login, {
    method: 'POST',
    body: params,
  });
  const state = {token: data.token, userId: data.adminId, isLogin: true, userName: data.username};
  localStorage.setItem('phemex-admin', JSON.stringify(state));
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
  return await request(url.addRole, {method: 'POST', body});
}

async function addResource(body) {
  return await request(url.addResource, {method: 'POST', body});
}

async function addPermission(body) {
  return await request(url.addPermission, {method: 'POST', body});
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

async function request(url, options: any = {}) {
  const {method = 'GET', body = {}} = options;
  const token = localStorage.getItem('token');
  const init: any = {
    headers: {
      'phemex-admin-token': token,
      'admin-namespace': '1',
      'content-type': 'application/json',
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
