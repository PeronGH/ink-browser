import { defineConfig } from '@rsbuild/core';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  source: {
    preEntry: ['./src/compat/polyfills.ts'],
  },
  resolve: {
    alias: {
      'react-devtools-core': './src/compat/react-devtools-core.ts',
      '#supports-color': './src/compat/supports-color.ts',
    },
  },
});
