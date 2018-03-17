'use strict';

const Router = require('koa-router');
const authRouter = require('./auth');

module.exports = new Router({ prefix: '/api' })
  .use('/auth', authRouter.routes());
