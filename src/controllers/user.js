'use strict';

const { User, Profile, Sequelize } = require('../models');
const Op = Sequelize.Op;

const getAllUsers = async ctx => {
  const users = await User.findAll();
  ctx.res.ok(users);
}

const getMe = async ctx => {
  ctx.params.id = ctx.state.user.id;
  return getUserById(ctx);
}

const getUserById = async ctx => {
  const userId = +ctx.params.id;

  if(userId !== +userId) {
    return ctx.res.notFound();
  }

  const user = await User.findOne({ where: { id: userId }});
  const profile = await Profile.findOne({ where: { user_id: userId }});

  if(user && profile) {
    let result;
    if(ctx.isAuthenticated()) {
      result = {
        id:        user.id,
        login:     user.login,
        email:     profile.email,
        firstName: profile.firstName,
        lastName:  profile.lastName,
        birthdate: profile.birthdate,
        gender:    profile.gender,
        country:   profile.country,
        city:      profile.city,
        avatar:    profile.avatar,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }
    } else {
      result = {
        id:        user.id,
        login:     user.login,
        firstName: profile.firstName,
        lastName:  profile.lastName
      }
    }
    ctx.res.ok(result);
  } else {
    ctx.res.notFound();
  }
}

const updateUserProfile = async ctx => {
  try {
    const userData = ctx.request.body;

    const userProfile = await Profile.findOne({ where: { user_id: ctx.params.id }});

    const newUserProfile = {
      firstName: userData.firstName || userProfile.firstName,
      lastName:  userData.lastName  || userProfile.lastName,
      birthdate: userData.birthdate || userProfile.birthdate,
      gender:    userData.gender    || userProfile.gender,
      country:   userData.country   || userProfile.country,
      city:      userData.city      || userProfile.city,
      avatar:    userData.avatar    || userProfile.avatar
    }

    const updatedUserProfile = await userProfile.update(newUserProfile);

    ctx.res.ok(updatedUserProfile);
  } catch(err) {
    ctx.res.badRequest(null, 'User profile not update');
  }
}

const getUserList = async list => {
  if(list.length === 0) return [];

  const users = await User.findAll({
    where: {
      id: {
        [Op.in]: list
      }
    },
    include: [{
      model: Profile
    }]
  });
  
  return users;
}

module.exports = { getAllUsers, getMe, getUserById, getUserList, updateUserProfile };
