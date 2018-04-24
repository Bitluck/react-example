'use strict';

async function authCheck(ctx, next) {
  if(ctx.isAuthenticated()) {
    await next();
  } else {
    ctx.res.unauthorized();
  }
}

async function unauthCheck(ctx, next) {
  if(ctx.isUnauthenticated()) {
    await next();
  } else {
    ctx.res.badRequest();
  }
}

module.exports = { authCheck, unauthCheck };
