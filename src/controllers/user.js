'use strict';

const { User, Profile } = require('../models');

const getAllUsers = async ctx => {
  const users = await User.findAll();
  ctx.res.ok(users);
}

const getUserById = async ctx => {
  const userId = ctx.params.id;
  const user = await User.findOne({ where: { id: userId }});
  const profile = await Profile.findOne({ where: { user_id: userId }});

  if(user && profile) {
    let result;
    if(ctx.isAuthenticated()){
      result = {
        id: user.id,
        login: user.id,
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        birthdate: profile.birthdate,
        gender: profile.gender,
        country: profile.country,
        city: profile.city,
        avatar: profile.avatar,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }
    } else {
      result = {
        id: user.id,
        login: user.login,
        firstName: profile.firstName,
        lastName: profile.lastName
      }
    }
    ctx.res.ok(result);
  } else {
    ctx.res.notFound();
  }
}

module.exports = { getAllUsers, getUserById };
