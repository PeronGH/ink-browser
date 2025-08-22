# Ink Browser

Proof of Concept for npm:ink in the Browser

## Try it out

```sh
bun i
bun dev
```

## Implementation Details

- We use `xterm.js` to provide a full terminal emulator in the browser.
- We implement the subset of the `process.stdin` and `process.stdout` APIs required by `ink` by redirecting them to `xterm.js` (see `src/compat/polyfills.ts`).
- We use `rsbuild` to apply the polyfills and replace the implementation of problematic Node.js packages (see `rsbuild.config.ts`).

## Credits

- <https://github.com/skorfmann/ink-storybook>
