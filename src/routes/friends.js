'use strict';

const Router = require('koa-router');
const friendsController = require('../controllers/friends');

const { authCheck } = require('../middlewares/auth-check');

module.exports = new Router()
  .get('/', authCheck, friendsController.getAllFriends)
  .post('/', authCheck, friendsController.makeFriends)
  .delete('/', authCheck, friendsController.deleteFromFriends)
  .get('/requests/in', authCheck, friendsController.getInRequests)
  .get('/requests/out', authCheck, friendsController.getOutRequests)
  .get('/rel', authCheck, friendsController.isRelation);
