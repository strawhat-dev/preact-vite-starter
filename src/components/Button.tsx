// https://arifszn.com/reactive-button/docs/
// https://stitches.dev/docs/composing-components
import ReactiveButton from 'reactive-button';
import { globalFonts } from '@/config';
import { styled } from '@/lib/stitches';

export const Button = styled(ReactiveButton, {
  fontWeight: '500 !important',
  fontFamily: globalFonts.join(','),
});
