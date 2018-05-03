'use strict';

const path = require('path');
const { Post, FriendRelation, User, Profile, Sequelize } = require('../models');
const Op = Sequelize.Op;

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

const getCurrentUserAllPosts = async ctx => {
  ctx.params.id = ctx.state.user.id;

  return getUserPosts(ctx);
}

const getUserPosts = async ctx => {
  // TODO
  // get userId from ctx.params
  // request to DB for get posts sorted by userId by date by desc
  // return result

  // query params
  // ctx.request.params
  // ?offset=x&limit=y

  const userId = ctx.params.id;

  let posts;

  const queryParams = ctx.request.query;
  const offset = +queryParams.offset ? queryParams.offset : 0;
  const limit  = +queryParams.limit  ? queryParams.limit  : 100;
  

  try {
    posts = await Post.findAll({
      where: {
        user_id: userId
      },
      order: [['created_at', 'DESC']],
      offset,
      limit
    });
  } catch(err) {
    return ctx.res.badRequest(err.message);
  }

  return ctx.res.ok(posts);
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

const getFeedPosts = async ctx => {
  const userId = ctx.state.user.id;

  let posts;

  const queryParams = ctx.request.query;
  const offset = +queryParams.offset ? queryParams.offset : 0;
  const limit  = +queryParams.limit  ? queryParams.limit  : 100;

  try {
    const friendRelations = await FriendRelation.findAll({
      where: {
        [Op.and]: {
          [Op.or]: {
            user_from: userId,
            user_to: userId
          },
          state: 'friends'
        }
      }
    });

    const friendsId = await friendRelations.map(rel => (rel.user_from === userId) ? rel.user_to
                                                                                  : rel.user_from);

    //console.log({ friendsId });

    posts = await Post.findAll({
      where: {
        user_id: {
          [Op.in]: friendsId
        }
      },
      include: [{
        model: User,
        attributes: ['id'],
        include: [{
          model: Profile,
          attributes: ['firstName', 'lastName', 'avatar']
        }]
      }],
      order: [['created_at', 'DESC']],
      offset,
      limit
    });

    return ctx.res.ok(posts);
  } catch(err) {
    return ctx.res.badRequest(err.message);
  }
}

module.exports = { getPostById, getUserPosts, getCurrentUserAllPosts, createNewPost, getFeedPosts };
