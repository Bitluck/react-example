'use strict';

const Router = require('koa-router');
const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');

module.exports = new Router({ prefix: '/api' })
  .use('/auth', authRouter.routes())
  .use('/users', usersRouter.routes())
  .use('/posts', postsRouter.routes());
