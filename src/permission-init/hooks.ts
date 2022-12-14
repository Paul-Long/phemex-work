import {useCallback} from 'react';
import {apis} from './utils';

export function useLogin() {
  const handleSubmit = useCallback(async (values) => {
    await apis.login(values);
  }, []);

  return {handleSubmit};
}
