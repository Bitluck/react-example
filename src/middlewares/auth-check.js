'use strict';

async function authCheck(ctx, next) {
  if(ctx.isAuthenticated()) {
    await next();
  } else {
    ctx.res.unauthorized();
  }
}

module.exports = authCheck;
