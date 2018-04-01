'use strict';

const Router = require('koa-router');
const postController = require('../controllers/post');

const authCheck = require('../middlewares/auth-check');
const parseForm = require('../middlewares/parse-form');
const validPostContent = require('../middlewares/valid-post-content');

module.exports = new Router()
  .get('/:id', authCheck, postController.getPostById)
  .post('/', authCheck, parseForm, validPostContent, postController.createNewPost);
