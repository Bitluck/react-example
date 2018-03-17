'use strict';

const Router = require('koa-router');

const auth = require('../controllers/auth');

const router = new Router();

router
  .post('/signin', auth.signin)
  .post('/signup', auth.signup);

module.exports = router;
