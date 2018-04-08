'use strict';

const Router = require('koa-router');
const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');
const browserRouter = require('./browser');

const apiRouter = new Router({ prefix: '/api' })
  .use('/auth', authRouter.routes())
  .use('/users', usersRouter.routes())
  .use('/posts', postsRouter.routes());

module.exports = new Router()
  .use(apiRouter.routes())
  .use(browserRouter.routes());
