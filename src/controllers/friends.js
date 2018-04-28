'use strict';

const { User, /*RequestRelation,*/ FriendRelation, Sequelize } = require('../models');
const Op = Sequelize.Op;

const getAllFriends = async ctx => {
  const userId = ctx.params.id;

  const friendRelations = await FriendRelation.findAll({
    where: {
      [Op.or]: [{ user_from: userId}, {user_to: userId}]
    }
  });

  //console.log({ f: JSON.stringify(friendRelations) });

  const obj = {
    userId,
    func: value => {
      return (value.user_from === userId) ? value.user_to : value.user_from;
    }
  }

  const friendIds = friendRelations.map(obj.func, obj);
  return friendIds;
  //console.log({ friendIds });
  
}

const makeFriends = async ctx => {
  // if user with id don't exists -> ?
  /*console.log({ 1: 2 });

  const userId = ctx.params.id;
  const authUserId = ctx.state.user.id;

  const user = await User.findOne({ where: { id: userId }});

  if(!user) {
    return ctx.res.badRequest(`User with id=${userId} not exists`);
  }

  const friendRel = await FriendRelation.findOne({
    where: {
      [Op.or]: [{ user_from: userId, user_to: authUserId },
                { user_from: authUserId, user_to: userId }]
    }
  });
  
  // if already friends -> nothing
  if(friendRel) {
    return ctx.res.ok();
  }

  const reqRel = await RequestRelation.findOne({
    where: {
      [Op.or]: [{ user_from: userId, user_to: authUserId },
                { user_from: authUserId, user_to: userId }]
    }
  });

  // if 1->2 -> 1<->2
  if(reqRel) {
    try {
      const rel = { user_from: reqRel.user_from, user_to: reqRel.user_to };
      const newFriendsRelation = await FriendRelation.create(rel);
      reqRel.destroy();
      return ctx.res.ok(newFriendsRelation);
    } catch(err) {
      return ctx.res.badRequest(err);
    }
  } else {
  // if 1-2  -> 1 ->2
    const rel = { user_from: authUserId, user_to: userId };
    const newRequestRelation = await RequestRelation.create(rel);
    return ctx.res.ok();
  }*/

  const userId = +ctx.params.id;
  const authUserId = +ctx.state.user.id;

  if(authUserId === userId) {
    return ctx.res.badRequest('User could\'nt is self friend');
  }

  const user = await User.findOne({ where: { id: userId }});

  if(!user) {
    return ctx.res.badRequest(`User with id=${userId} not exists`);
  }

  const relation = await FriendRelation.findOne({
    where: {
      [Op.or]: [{ user_from: userId, user_to: authUserId },
                { user_from: authUserId, user_to: userId }]
    }
  });

  if(!relation) {
    try {
      const rel = { user_from: authUserId, user_to: userId, state: 'request' };
      const newRel = await FriendRelation.create(rel);
      return ctx.res.created(newRel);
    } catch(err) {
      return ctx.res.badRequest();
    }
  }

  if(relation.state === 'friends') {
    return ctx.res.ok(null, 'Already friends');
  }

  if(relation.state === 'request') {
    if(relation.user_from === authUserId && relation.user_to === userId) {
      return ctx.res.ok(null, 'Request already post');
    }
    relation.state = 'friends';
    //const updatedRel = await FriendRelation.update(relation);
    relation.save();
    return ctx.res.created(relation);
  }
}

const deleteFromFriends = ctx => {
  ctx.res.ok();
}

const getInRequests = ctx => {
  ctx.res.ok();
}

const getOutRequests = ctx => {
  ctx.res.ok();
}

const isRelation = ctx => {
  ctx.res.ok();
}

module.exports = { getAllFriends, makeFriends, deleteFromFriends, getInRequests, getOutRequests, isRelation };
