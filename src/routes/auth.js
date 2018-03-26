'use strict';

const Router = require('koa-router');
const auth = require('../controllers/auth');

module.exports = new Router()
  .post('/signin', auth.signin)
  .post('/signup', auth.signup);
