const Koa = require('koa');
const forwarding = require('../dist/bundle');
const { join } = require('path');


const app = new Koa();
const HOST = '0.0.0.0';
const PORT = 8080;

app
  .use(forwarding({
    host: 'miaooo.me',
    match: /^\/st/,
    map: p => join('perfix', p),
  }))
  .listen(PORT, HOST);

console.log(`🌏  The server run at ${HOST}:${PORT}`);

