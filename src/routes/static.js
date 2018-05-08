'use strict';

const path = require('path');
const Router = require('koa-router');
const { createReadStream } = require('fs');

module.exports = new Router()
  .get('*', async ctx => {
    if(ctx.request.path === '/dist/bundle.js') {
      ctx.type = 'text/javascript';
      ctx.status = 200;
      ctx.body = createReadStream(path.resolve('./public/dist/bundle.js'));
    }
    if(ctx.request.path === '/dist/styles.css') {
      ctx.type = 'text/css';
      ctx.status = 200;
      ctx.body = createReadStream(path.resolve('./public/dist/styles.css'));
    }
    if(ctx.request.path !== '/favicon.ico') {
      ctx.type = 'html';
      ctx.status = 200;
      ctx.body = createReadStream(path.resolve('./public/index.html'));
    }
    
    return;
  });
