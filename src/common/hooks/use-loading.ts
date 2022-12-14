import {useCallback, useState} from 'react';

export function useLoadingHook(action: (e?) => Promise<void>, deps: any[] = []): [boolean, (e?) => Promise<any>] {
  const [loading, setLoading] = useState<boolean>(false);
  const exec = useCallback(async function (...args) {
    setLoading(true);
    await action(...args);
    const timer = setTimeout(() => setLoading(false), 1000);
    return function () {
      clearTimeout(timer);
    };
  }, deps);
  return [loading, exec];
}
