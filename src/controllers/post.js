'use strict';

const path = require('path');
const { Post } = require('../models');

const publicPicturePath = '/img/posts';

const getPostById = async ctx => {
  const postId = ctx.params.id;

  const post = await Post.findOne({ where: { id: postId }});

  if(post) {
    ctx.res.ok(post);
  } else {
    ctx.res.notFound(postId);
  }
}

const createNewPost = async ctx => {
  const { fields, files } = ctx.request.formData;
  const { text } = fields;
  const { picture } = files;
  
  const picturePath = picture ?
                      path.join(publicPicturePath, path.parse(picture.path).base)
                      : null;

  const post = {
    text: text || '',
    picture: picturePath,
    user_id: ctx.state.user.id
  };

  try {
    const createdPost = await Post.create(post);
    return ctx.res.ok(createdPost);
  } catch(err) {
    return ctx.res.badRequest(null, err.message);
  }
}

module.exports = { getPostById, createNewPost };
