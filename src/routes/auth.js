'use strict';

const Router = require('koa-router');
const auth = require('../controllers/auth');

const { authCheck, unauthCheck } = require('../middlewares/auth-check');

module.exports = new Router()
  .post('/signin', unauthCheck, auth.signin)
  .post('/signup', unauthCheck, auth.signup)
  .post('/signout', authCheck, auth.signout);
