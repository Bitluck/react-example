'use strict';

async function selfUser(ctx, next) {
  if(ctx.user.id === ctx.params.id) {
    await next();
  } else {
    ctx.res.unauthorized();
  }
}

module.exports = selfUser;
