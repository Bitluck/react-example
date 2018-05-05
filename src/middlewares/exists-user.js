'use strict';

const { User } = require('../models');

const existsUser = async (ctx, next) => {
  const userId = +ctx.params.id;

  if(!userId) {
    return ctx.res.badRequest('User id not a number');    
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
