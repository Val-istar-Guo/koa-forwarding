import url from 'url';
import http from 'http';

import request from './request';


const defaultMap = p => p;


function fixPath(path) {
  if (!path.match(/^\//)) {
    return `/${path}`;
  }

  return path;
}

export default function ({ host, port = null, match = /.*/, map }) {
  return async (ctx, next) => {
    if (!match.test(ctx.path)) {
      await next();
      return;
    }

    const path = fixPath(map(ctx.path));
    const opt = {
      host,
      port,
      path,
      method: ctx.method,
      headers: Object.assign({}, ctx.header, { host }),
    };

    console.log('[requrest options]', opt, '\n')

    const req = await request(opt, ctx);
    // console.log(req);
  };
};

