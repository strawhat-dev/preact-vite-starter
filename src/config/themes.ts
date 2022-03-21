// https://stitches.dev/docs/theming
import { createTheme } from '@/lib/stitches';

type Theme = typeof light;

const light = createTheme({
  colors: { bg: 'white', fg: 'black' },
});

const dark = createTheme({
  colors: { bg: 'hsl(208,8%,8%)', fg: 'white' },
});

export type Themes = 'light' | 'dark';
export const themeMap: Record<Themes, Theme> = { light, dark };
export const DEFAULT_THEME = 'light';
