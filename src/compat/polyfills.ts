import EventEmitter from 'events';

// @ts-ignore
window.process ??= {};

process.env = {
  FORCE_COLOR: '3',
  TERM: 'xterm-256color',
  COLORTERM: 'truecolor',
};

function createStream(): NodeJS.ReadStream | NodeJS.WriteStream {
  const stream = new EventEmitter() as any;
  stream.columns = 80;
  stream.rows = 80;
  stream.isTTY = true;
  stream.setEncoding = () => {};
  stream.setRawMode = () => {};
  stream.resume = () => {};
  stream.pause = () => {};
  stream.getColorDepth = () => 256;
  stream.hasColors = () => true;

  return stream;
}

const stdout = createStream();
// @ts-ignore
process.stdout = stdout;
// @ts-ignore
process.stderr = stdout;

const stdin = createStream();
// @ts-ignore
process.stdin = stdin;
