'use strict';

const Router = require('koa-router');
const postsController = require('../controllers/post');

const authCheck = require('../middlewares/auth-check');

module.exports = new Router()
  .get('/:id', authCheck, postsController.getPostById);
