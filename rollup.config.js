export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    'fs',
    'url',
    'path',
    'http',
    'https',
  ],
};
