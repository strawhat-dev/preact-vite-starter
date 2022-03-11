import { StrictMode } from 'react';
import { render } from 'react-dom';
import { applyGlobalCss } from '@/lib/stitches';
import { App } from './App';

applyGlobalCss();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
