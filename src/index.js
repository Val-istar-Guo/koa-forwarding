import url from 'url';
import path from 'path';
import http from 'http';

import request from './request';


const defaultMap = p => p;

export default function ({ host, port = null, match = /.*/, map }) {
  return async (ctx, next) => {
    if (!match(ctx.path)) {
      await next();
      return;
    }

    const opt = {
      host,
      port,
      path: map(ctx.path),
      method: ctx.method,
      headers: Object.assign({}, ctx.header, { host }),
    };

    console.log('[requrest options]', opt, '\n')

    const req = await request(opt, ctx);
    // console.log(req);
  };
};

