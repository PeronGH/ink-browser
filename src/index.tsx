import './index.css';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';

const rootEl = document.getElementById('root');
if (rootEl) {
  const term = new Terminal();
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(rootEl);

  fitAddon.fit();
  window.addEventListener('resize', () => fitAddon.fit());

  term.focus();
}
