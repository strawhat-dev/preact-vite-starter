import { StrictMode } from 'react';
import { render } from 'react-dom';
import { applyGlobalCSS } from '@/lib/stitches';
import { App } from './App';

applyGlobalCSS();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
