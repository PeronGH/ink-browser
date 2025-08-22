import './index.css';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';
import { render } from 'ink';
import React from 'react';
import { App } from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const term = new Terminal({ convertEol: true, disableStdin: false });
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(rootEl);

  const fitTerm = () => {
    fitAddon.fit();
    process.stdout.columns = term.cols;
    process.stdout.rows = term.rows;
  };
  fitTerm();
  window.addEventListener('resize', fitTerm);

  term.focus();

  term.onData((data) => process.stdin.emit('data', data));
  process.stdout.write = (str) => {
    term.write(str);
    return true;
  };

  render(React.createElement(App), {
    debug: false,
    patchConsole: false,
    isScreenReaderEnabled: false,
  });
}
