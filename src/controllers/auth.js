'use strict';

const bcrypt = require('bcrypt');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

passport.serializeUser(async (user, done) => {
  try {
    return done(null, user.login);
  } catch(err) {
    return done(err);
  }
});

passport.deserializeUser(async (login, done) => {
  try {
    const user = await User.findOne({ where: { login } });
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
  try {
    const user = await User.findOne({ where: { login } });
    if(user) {
      const result = await bcrypt.compare(password, user.password);
      if(result === true) {
        ctx.res.ok();
        return done(null, user);
      } else {
        ctx.res.notFound(null, 'Incorrect password');
        return done(null, false);
      }
    } else {
      ctx.res.notFound(null, 'User not found', login);
      return done(null, false);
    }
  } catch(err) {
    ctx.res.internalServerError();
    return done(err);
  }
}

async function signin(ctx, next) {
  await passport.authenticate('local.signin')(ctx, next);
  return;
}

async function signup(ctx, next) {
  try {
    const [login, password] = [ctx.request.body.login, ctx.request.body.password];

    const user = await User.findOne({ where: { login } });

    if(user) {
      return ctx.res.badRequest(0, 'User with such login already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = {
      login: login,
      password: hashPassword
    };
    const createdUser = await User.create(newUser);
    ctx.res.created(createdUser);
    next();
  } catch(err) {
    return ctx.res.badRequest(1, 'Error creating new user');
  }
}

module.exports = { passport, signin, signup };
