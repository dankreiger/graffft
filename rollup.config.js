import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import pkg from './package.json';

const input = 'index.tsx';

const config = {
  input,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), sizeSnapshot()],
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.devDependencies),
  ],
};

export default config;
