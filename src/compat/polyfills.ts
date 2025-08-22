import EventEmitter from 'events';

// @ts-ignore
class Stdin extends EventEmitter implements NodeJS.ReadStream {
  #buffer: string[] = [];

  constructor() {
    super();
    this.on('data', (data: string) => {
      this.#buffer.push(data);
      this.emit('readable');
    });
  }

  get readable(): boolean {
    return this.#buffer.length > 0;
  }

  read(size?: number): string | null {
    if (this.#buffer.length === 0) {
      return null;
    }
    const chunkSize =
      size === undefined
        ? this.#buffer.length
        : Math.min(size, this.#buffer.length);
    const chunk = this.#buffer.slice(0, chunkSize);
    this.#buffer = this.#buffer.slice(chunkSize);

    return chunk.join();
  }

  isTTY = true;

  setRawMode(mode: boolean): this {
    console.debug('Stdin.setRawMode', mode);
    return this;
  }
  setEncoding(encoding?: BufferEncoding): this {
    console.debug('Stdin.setEncoding', encoding);
    return this;
  }
  ref(): this {
    console.debug('Stdin.ref');
    return this;
  }
  unref(): this {
    console.debug('Stdin.unref');
    return this;
  }
}

// @ts-ignore
class Stdout extends EventEmitter implements NodeJS.WriteStream {
  isTTY = true;
}

// @ts-ignore
process.stdin = new Stdin();
// @ts-ignore
process.stdout = new Stdout();
// @ts-ignore
process.stderr = process.stdout;
