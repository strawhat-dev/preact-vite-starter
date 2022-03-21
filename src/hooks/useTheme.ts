import { useCallback } from 'react';
import { get, set } from 'idb-keyval';
import useSWR from 'swr';
import { DEFAULT_THEME, Themes } from '@/config';

export const useTheme = () => {
  const { data, mutate } = useSWR<Themes>(
    'theme',
    async (key) => (await get(key)) || DEFAULT_THEME
  );

  const handleTheme = useCallback(
    async (theme: Themes) => {
      if (theme !== data) {
        await set('theme', theme);
        await mutate();
      }
    },
    [data, mutate]
  );

  return { theme: data!, setTheme: handleTheme };
};
