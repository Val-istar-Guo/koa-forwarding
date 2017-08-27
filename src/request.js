import https from 'https';
import http from 'http';

export default async function request(opt, ctx) {
  // const response = ctx.response;

  return new Promise((reslove, reject) => {

    const req = http.request(opt, res => {
      console.log('[response headers]', res.headers, '\n');
      ctx.set(res.headers);

      res.on('data', chunk => {
        if (ctx.body) ctx.body += chunk;
        else ctx.body = chunk;

        console.log(chunk);
      });

      res.on('end', reslove);
    });

    req.on('error', reject);

    req.end();


    // write data to request body
    // req.write();
  });
}

