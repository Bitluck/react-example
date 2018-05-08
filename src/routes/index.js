'use strict';

const Router = require('koa-router');
const authRouter = require('./auth');
const usersRouter = require('./users');
const postsRouter = require('./posts');
const staticRouter = require('./static');

const apiRouter = new Router({ prefix: '/api' })
  .use('/auth', authRouter.routes(), authRouter.allowedMethods())
  .use('/users', usersRouter.routes(), usersRouter.allowedMethods())
  .use('/posts', postsRouter.routes(), postsRouter.allowedMethods());

module.exports = new Router()
  .use(apiRouter.routes(), apiRouter.allowedMethods())
  .use(staticRouter.routes(), staticRouter.allowedMethods());
