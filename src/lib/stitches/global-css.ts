import { globalCss } from './stitches.config';

export const applyGlobalCss = globalCss({
  ':root': {
    fontSize: 16,
    minHeight: '100vh',
    fontFamily: 'system-ui',
  },
});
