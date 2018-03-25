'use strict';

const Router = require('koa-router');
const authCheck = require('../middlewares/auth-check');
const selfUser = require('../middlewares/same-user');
const usersController = require('../controllers/user');

module.exports = new Router()
  .get('/', authCheck, usersController.getAllUsers)
  .get('/:id', usersController.getUserById)
  .put('/:id', authCheck, selfUser, usersController.updateUserProfile);
