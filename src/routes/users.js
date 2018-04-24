'use strict';

const Router = require('koa-router');
const usersController = require('../controllers/user');

const { authCheck } = require('../middlewares/auth-check');
const selfUser = require('../middlewares/same-user');

module.exports = new Router()
  .get('/', authCheck, usersController.getAllUsers)
  .get('/:id', usersController.getUserById)
  .put('/:id', authCheck, selfUser, usersController.updateUserProfile);
