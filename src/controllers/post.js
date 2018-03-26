'use strict';

const { Post } = require('../models');

const getPostById = async ctx => {
  const postId = ctx.params.id;

  const post = await Post.findOne({ where: { id: postId }});

  if(post) {
    ctx.res.ok(post);
  } else {
    ctx.res.notFound(postId);
  }
}

module.exports = { getPostById };
