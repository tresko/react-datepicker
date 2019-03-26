import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export function rollup({packageJsonPath, input = './src/index.tsx'}) {
  return {
    input: input,
    external: ['react', 'react-dom'],
    output: [
      {
        file: 'lib/index.cjs.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'lib/index.esm.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      typescript({
        typescript: require('typescript'),
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
    ],
  }
}