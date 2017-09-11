# KOA\_FORWARDING

[![npm](https://img.shields.io/npm/v/koa-forwarding.svg?style=flat-square)](https://www.npmjs.com/package/koa-forwarding)
[![npm](https://img.shields.io/npm/dm/koa-forwarding.svg?style=flat-square)](https://www.npmjs.com/package/koa-forwarding)

## Install

```bash
npm install koa-forwarding

yarn add koa-forwarding
```

## Usage

```javascript
import Koa from 'koa';
import forwarding from 'koa-forwarding';

const app = new Koa();
const HOST = '0.0.0.0';
const PORT = 8080;

app
  .use(forwarding({
    host: 'miaooo.me',
    match: /\/st.*/,
    map: p => `/perfix/${p}`,
  }))
  .listen(PORT, HOST);

// 0.0.0.0:8080/static => miaooo.me/perfix/static
// 0.0.0.0:8080/ts => 404
```

## See also

* [koajs/mount](https://github.com/koajs/mount) Mount `koa-forwarding` to a specific path

