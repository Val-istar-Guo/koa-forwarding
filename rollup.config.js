export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'dist/bundle.js',
  external: [
    'fs',
    'url',
    'path',
    'http',
    'https',
  ],
};
