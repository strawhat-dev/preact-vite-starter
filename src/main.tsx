import '@csstools/normalize.css/opinionated.css';
import { render } from 'preact';
import { applyGlobalCSS } from '@/config';
import { App } from './App';

applyGlobalCSS();

render(<App />, document.getElementById('root')!);
