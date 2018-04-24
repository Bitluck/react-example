'use strict';

const bcrypt = require('bcrypt');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const { User, Profile } = require('../models');

const SALT_ROUNDS = 10;

passport.serializeUser(async (user, done) => {
  try {
    if(!user) {
      return done(null, false);
    }
    return done(null, user.id);
  } catch(err) {
    return done(err);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return done(null, false);
    }
    
    return done(null, user);
  } catch(err) {
    return done(err);
  }
});

passport.use('local.signin', new LocalStrategy({
  usernameField: 'login',
  passwordField: 'password',
  session: true,
  passReqToCallback: true
}, login));

async function login(ctx, login, password, done) {
  const user = await User.findOne({ where: { login } });
  if(user) {
    const result = await bcrypt.compare(password, user.password);
    if(result === true) {
      ctx.res.ok();
      return done(null, user);
    } else {
      return done('Incorrect password');
    }
  } else {
    return done('User not found');
  }
}

async function signin(ctx, next) {
  await passport.authenticate('local.signin', async (err, user, info, status) => {
    if(!err && user) {
      await ctx.login(user);

      const userDataResponse = await {
        id: user.id,
        login: user.login,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }
      ctx.res.ok(userDataResponse);
    } else {
      ctx.res.badRequest(status, err || info && info.message, null);
    }

    await next();
  })(ctx, next);
}

async function signup(ctx) {
  try {
    const userData = ctx.request.body;
    const [login, password] = [userData.login, userData.password];

    if(await User.findOne({ where: { login } })) {
      return ctx.res.badRequest(null, 'User with such login already exists');
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = {
      login: login,
      password: hashPassword
    };

    const createdUser = await User.create(newUser);
    if(createdUser) {
      const userProfile = {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthdate: new Date(userData.birthdate),
        gender: userData.gender,
        country: userData.country,
        city: userData.city,
        user_id: createdUser.id
      }

      const createdProfile = await Profile.create(userProfile);

      if(createdProfile) {
        return ctx.res.created(createdUser);
      }
    }
    ctx.res.notFound();
  } catch(err) {
    return ctx.res.badRequest(null, 'Error creating new user');
  }
}

async function signout(ctx) {
  try {
    ctx.logout();  
    return ctx.res.ok();
  } catch(err) {
    return ctx.res.badRequest();
  }
}

module.exports = { passport, signin, signup, signout };
