'use strict';

const { User } = require('../models');

const existsUser = async (ctx, next) => {
  const userId = +ctx.params.id;
  const authUserId = +ctx.state.user.id;

  if(!userId) {
    return ctx.res.badRequest('User id not a number');    
  }

  if(authUserId === userId) {
    return ctx.res.badRequest('User could\'nt is self friend');
  }

  try {
    const user = await User.findOne({ where: { id: userId }});
    if(!user) {
      return ctx.res.badRequest(`User with id=${userId} not exists`);
    }
  } catch(err) {
    return ctx.res.badRequest(`User with id=${userId} not exists`);
  }

  return await next();
}

module.exports = { existsUser };
