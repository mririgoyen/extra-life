import jscc from 'rollup-plugin-jscc';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: {
      file: pkg.main,
      format: 'cjs',
      interop: false
    },
    external: ['https'],
    plugins: [
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      },
      {
        file: pkg.browser,
        format: 'iife',
        name: 'extraLife',
        sourcemap: true
      }
    ],
    plugins: [
      jscc({
        values: { _BROWSER: true }
      }),
      terser()
    ]
  }
];