import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState(() => {
    if (typeof window !== 'undefined') {
      const storageData: string | null = window.localStorage?.getItem(key);
      return storageData !== null ? JSON.parse(storageData) : {};
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem(key, JSON.stringify(data));
      }
    } catch {
      throw new Error();
    }
  }, [key, data]);

  return [data, setData];
};
