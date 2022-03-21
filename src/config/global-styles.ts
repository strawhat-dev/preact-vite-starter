// https://stitches.dev/docs/api#globalcss
import { globalCss } from '@/lib/stitches';

export const globalFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
];

export const applyGlobalCSS = globalCss({
  '*': { boxSizing: 'inherit' },
  '*:before': { boxSizing: 'inherit' },
  '*:after': { boxSizing: 'inherit' },
  '*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *))': {
    border: 'unset',
  },
  html: {
    boxSizing: 'border-box',
    fontFamily: globalFonts.join(','),
  },
  '#App': {
    minHeight: '100vh',
    backgroundColor: '$bg',
    color: '$fg',
  },
});
