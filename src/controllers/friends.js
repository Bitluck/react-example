'use strict';

const { FriendRelation, Sequelize } = require('../models');
const { getUserList } = require('./user');
const Op = Sequelize.Op;

const RELATION_STATUS = {
  none: null,
  friends: 'friends',
  request: 'request',
  inRequest: 'inRequest',
  outRequest: 'outRequest'
};

const getAllFriends = async ctx => {
  const userId = +ctx.params.id;

  const friendRelations = await FriendRelation.findAll({
    where: {
      [Op.and]:[
        {
          state: RELATION_STATUS.friends
        },
        {
          [Op.or]: [{ user_from: userId }, { user_to: userId }]
        }
      ]
    }
  });

  const friendIds = friendRelations.map(rel => rel.user_from === userId 
                                             ? rel.user_to
                                             : rel.user_from);

  try {
    const friends = await getUserList(friendIds);

  return ctx.res.ok(friends);
  } catch(err) {
    return ctx.res.badRequest(err.message);
  }
}

const makeFriends = async ctx => {
  const userId = +ctx.params.id;
  const authUserId = +ctx.state.user.id;

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
      newRel.state = RELATION_STATUS.outRequest;
      return ctx.res.created(newRel);
    } catch(err) {
      return ctx.res.badRequest();
    }
  }

  if(relation.state === 'friends') {
    return ctx.res.ok(RELATION_STATUS.friends, 'Already friends');
  }

  if(relation.state === 'request') {
    if(relation.user_from === authUserId && relation.user_to === userId) {
      return ctx.res.ok(RELATION_STATUS.outRequest, 'Request already post');
    }
    relation.state = RELATION_STATUS.friends;
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

const isRelation = async ctx => {
  const userId     = +ctx.params.id;
  const authUserId = +ctx.state.user.id;

  let relation;

  try {
    relation = await FriendRelation.findOne({
      where: {
        [Op.or]: [{ user_from: authUserId, user_to: userId },
                  { user_from: userId, user_to: authUserId }]
      }
    });
  } catch(err) {
    return ctx.res.badRequest();
  }

  const status = {
    userFrom: authUserId,
    userTo: userId,
    relation: RELATION_STATUS.none
  }

  if(relation) {
    if(relation.state === RELATION_STATUS.friends) {
      status.relation = RELATION_STATUS.friends;
    }
    if(relation.state === RELATION_STATUS.request) {
      if(relation.user_from === authUserId) {
        status.relation = RELATION_STATUS.outRequest;
      } else {
        status.relation = RELATION_STATUS.inRequest;
        [status.userFrom, status.userTo] = [status.userTo, status.userFrom];
      }
    }
  }

  return ctx.res.ok(status);
}

module.exports = { getAllFriends, makeFriends, deleteFromFriends, getInRequests, getOutRequests, isRelation };
