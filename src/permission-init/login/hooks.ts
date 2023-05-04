import {useCallback} from 'react';
import {message} from 'antd';
import {apis} from '../utils';

export function useLogin() {
  const handleSubmit = useCallback(async (values) => {
    const res: any = await apis.login(values);
    if (!res.code && res.data) {
      message.success('login success');
    }
  }, []);

  return {handleSubmit};
}
