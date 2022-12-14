import {requestFactory} from '@/common/utils';
import {url} from '@/template-dir/const';

export class Api {
  static async getList(params) {
    return requestFactory({url: url.list, params, isUseProTable: true});
  }
  static add(params) {
    return requestFactory({url: url.add, params, method: 'POST'});
  }
  static update(params) {
    return requestFactory({url: url.update, params, method: 'POST'});
  }
  static delete(params) {
    return requestFactory({url: url.delete, params, method: 'DELETE'});
  }
}
