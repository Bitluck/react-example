'use strict';

const Router = require('koa-router');
const friendsController = require('../controllers/friends');

const { authCheck } = require('../middlewares/auth-check');
const { existsUser } = require('../middlewares/exists-user');

module.exports = new Router()
  .get('/', authCheck, existsUser, friendsController.getAllFriends)
  .post('/', authCheck, existsUser, friendsController.makeFriends)
  .delete('/', authCheck, friendsController.deleteFromFriends)
  .get('/requests/in', authCheck, existsUser, friendsController.getInRequests)
  .get('/requests/out', authCheck, existsUser, friendsController.getOutRequests)
  .get('/relation', authCheck, existsUser, friendsController.isRelation);
