'use strict';

const Router = require('koa-router');
const friendsRouter = require('./friends');
const usersController = require('../controllers/user');

const { authCheck } = require('../middlewares/auth-check');
const selfUser = require('../middlewares/same-user');

const userRouter = new Router()
  .get('/', authCheck, usersController.getAllUsers)
  .get('/me', authCheck, usersController.getMe)
  .get('/:id', usersController.getUserById)
  .put('/:id', authCheck, selfUser, usersController.updateUserProfile)
  .use('/:id/friends', friendsRouter.routes(), friendsRouter.allowedMethods());

module.exports = userRouter;
