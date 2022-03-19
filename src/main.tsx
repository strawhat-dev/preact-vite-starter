import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from '@/App';
import { applyGlobalCSS } from '@/lib/stitches';

applyGlobalCSS();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
