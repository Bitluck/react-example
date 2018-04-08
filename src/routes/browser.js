'use strict';

const Router = require('koa-router');
const serve = require('koa2-static-middleware');

const staticRoutes = [
  '/',
  '/users/:id'
];

module.exports = new Router()
  .get(staticRoutes, serve('public'))
  .get('/dist/*', serve('public/dist'));
